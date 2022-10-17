# dockert compose
### 新建目录
添加docker-compose.yml配置文件

```Plain Text
version: '2'
services:
  tomcat:
    restart: always
    image: tomcat
    container_name: tomcat
    ports:
      - 30000:8080
```
### 启动命令
在配置同级目录下运行，或指定配置文件路径

```Plain Text
docker-compose -f /conf_path up -d  --后台守护启动
docker-compose -f /conf_path up  --前台启动
```
### 查询日志
```Plain Text
docker-compose logs tomcat
```
### 停止
```Plain Text
docker-compose start  --启动
docker-compose stop  --停止
docker-compose dowm  --停止并移除
```
