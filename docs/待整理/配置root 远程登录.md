# 配置root 远程登录
### 编辑配置
```Plain Text
/etc/ssh/  目录下的sshd服务配置文件 sshd_config
```
```Plain Text
去掉 22端口注释

PasswordAuthentication yes
```
### 启动服务
```Plain Text
service sshd start  或 systemctl start sshd.service
```
