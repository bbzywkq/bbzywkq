# 固定ip地址
```Plain Text
cd /etc/sysconfig/network-scripts
vi ifcfg-ens33
```
```Plain Text
ONBOOT=yes
BOOTPROTO=static
```
```Plain Text
IPADDR=192.168.1.11
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
DNS1=8.8.8.8
```
#### 重启虚拟网络服务
```Plain Text
service network restart
```
