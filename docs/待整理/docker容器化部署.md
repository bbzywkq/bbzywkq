# docker容器化部署
### 镜像
```Plain Text
docker pull elasticsearch:7.3.0
```
```Plain Text
docker run -d --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" elasticsearch:7.3.0
```
```Plain Text
docker run --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" elasticsearch:7.3.0
```
docker run -d --name es -p 9200:9200 -p 9300:9300  -e "discovery.type=single-node" elasticsearch:7.3.0



### 容器内目录
```Plain Text
/usr/share/elasticsearch
```
### 重新挂在目录
```Plain Text
docker volume create es_conf
docker volume create es_data
docker volume create es_plugins
```
### 前台启动
```Plain Text
docker run --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" -v es_conf:/usr/share/elasticsearch/config -v es_data:/usr/share/elasticsearch/data -v es_plugins:/usr/share/elasticsearch/plugins  elasticsearch:7.3.0

```
### 跨域配置
```Plain Text
cluster.name: "docker-cluster"
network.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: "*"

# minimum_master_nodes need to be explicitly set when bound on a public IP
# set to 1 to allow single node clusters
# Details: https://github.com/elastic/elasticsearch/pull/17288
discovery.zen.minimum_master_nodes: 1
```
