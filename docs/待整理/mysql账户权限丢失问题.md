# mysql账户权限丢失问题
### mysql root权限丢失只能看到information\_schema数据库解决办法
#### 此问题发生在移动了 数据库磁盘文件后
### 授权归属
```Plain Text
chown -R mysql:mysql /data/mysql
```
```Plain Text
vi /etc/my.conf
```
在文件最后一行添加

```Plain Text
--关闭整个库的权限验证
skip-grant-tables
```
保存后，root权限登录，运行 service mysqld restart 重启mysql
登录

在终端执行以下操作：

```Plain Text
mysql> use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
Database changed
mysql> use mysql;
Database changed
mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)
mysql> grant all privileges on *.* to root@localhost identified by 'wkqdmm';
Query OK, 0 rows affected, 1 warning (0.01 sec)
mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)
mysql> exit
```
```Plain Text
重新启动：
service mysqld restart
查看历史权限/如历史权限无效则重新授权
```
