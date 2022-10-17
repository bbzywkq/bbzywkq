# docker安装
### 查看版本
```Plain Text
rabbitmqctl status | grep rabbit
```
### 下拉镜像
```Plain Text
docker pull rabbitmq:3.7.24
```
### 启动
#### 方式1–默认账户启动
默认guest 用户，密码也是 guest

```Plain Text
docker run -d --hostname my-rabbit --name mq -p 15672:15672 -p 5672:5672 rabbitmq:3.7.24
```
#### 方式2–指定账户启动
```Plain Text
docker run -d --hostname my-rabbit --name rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password -p 15672:15672 -p 5672:5672 rabbitmq:management
```
### 安装插件
```Plain Text
docker cp /root/rabbitmq_delayed_message_exchange-3.8.0.ez mq:/opt/rabbitmq/plugins
```
启用插件

```Plain Text
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```
查看插件列表

```Plain Text
rabbitmq-plugins list
```
### 启用web客户端
```Plain Text
rabbitmq-plugins enable rabbitmq_management   # 启用插件
service rabbitmq-server restart    # 重启

通过 http://localhost:15672 查看，使用默认账户guest/guest 登录。 
```
