# apt安装
### erl依赖
```Plain Text
apt-get install erlang-nox     # 安装erlang
erl    # 查看relang语言版本，成功执行则说明relang安装成功
```
### 添加公钥
```Plain Text
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
### 安装命令
```Plain Text

apt-get update
apt-get install rabbitmq-server  #安装成功自动启动
```
### 查看状态
```Plain Text
systemctl status rabbitmq-server   
#Active: active (running) 说明处于运行状态
# service rabbitmq-server status 
#用service指令也可以查看，同systemctl指令
```
### 启动重启
```Plain Text
service rabbitmq-server start    # 启动
service rabbitmq-server stop     # 停止
service rabbitmq-server restart  # 重启 
```
### 启动web客户端插件
```Plain Text
rabbitmq-plugins enable rabbitmq_management   # 启用插件
service rabbitmq-server restart    # 重启

通过 http://localhost:15672 查看，使用默认账户guest/guest 登录。 
```
