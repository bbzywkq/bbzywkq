# nacos使用及配置
```Plain Text
pid=ps -ef |grep nacos | grep -v grep | awk '{print $2}'
```
启动默认端口8848
默认账号：nacos
默认密码：nacos

### 单机模式启动：
```Plain Text
 bash startup.sh -m standalone
```
### 配置本地库
```Plain Text
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://ip:port/data_name?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=你的数据库用户
db.password=你的数据库密码
```
