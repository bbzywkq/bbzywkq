# LPG日志收集及展示系统
# 简介
LPG日志收集方案内存占用很少，经济且高效！它不像ELK日志系统那样为日志建立索引，而是为每个日志流设置一组标签。下面分别介绍下它的核心组件：

* Promtail：日志收集器，有点像Filebeat，可以收集日志文件中的日志，并把收集到的数据推送到Loki中去。
* Loki：聚合并存储日志数据，可以作为Grafana的数据源，为Grafana提供可视化数据。
* Grafana：从Loki中获取日志信息，进行可视化展示。

[drawio](sNK1L4WpLepUqFxHR1KWsO2RnW05cF0DXVefCqUPn_Y.svg)



# 安装(单机docker环境)
新建工作目录/mydata/lpg

新建配置文件存储目录和docker-compsoe启动文件

![image](https://file.bbzy.online/blog/6uPH8-DncQnSXicvx53Xzwjy2xAlg5SU0cDvy2-Ml84.png)

具体文件如下

## loki配置文件local-config.yaml
```yaml
auth_enabled: false

server:
  http_listen_port: 3100

common:
  path_prefix: /loki
  storage:
    filesystem:
      chunks_directory: /loki/chunks
      rules_directory: /loki/rules
  replication_factor: 1
  ring:
    instance_addr: 127.0.0.1
    kvstore:
      store: inmemory

schema_config:
  configs:
    - from: 2020-10-24
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

ruler:
  alertmanager_url: http://localhost:9093
```
## promtail配置文件promtail.yml
```yaml
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml
#docker内部通过容器名字加端口调用loki服务
clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
- job_name: system
  static_configs:
  - targets:
      - localhost
    labels:
      job: varlogs
      __path__: /var/log/*log
```
## docker-compose配置文件
```yaml
version: "2"

services:
  # 日志存储和解析
  loki:
    image: grafana/loki
    container_name: lpg-loki
    volumes:
      - /mydata/lpg/loki/:/etc/loki/
    # 修改loki默认配置文件路径
    command: -config.file=/etc/loki/local-config.yaml
    ports:
      - 3100:3100

  # 日志收集器
  promtail:
    image: grafana/promtail
    container_name: lpg-promtail
    volumes:
      # 将需要收集的日志所在目录挂载到promtail容器中
      - /var/log/nginx/:/var/log/
      - /mydata/lpg/promtail/:/etc/promtail/
    # 修改promtail默认配置文件路径
    command: -config.file=/etc/promtail/promtail.yml

  # 日志可视化
  grafana:
    image: grafana/grafana
    container_name: lpg-grafana
    ports:
      - 3000:3000
```
## 日志的查看
登录地址：39.104.59.218:3000