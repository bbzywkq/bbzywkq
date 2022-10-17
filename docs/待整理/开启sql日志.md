# 开启sql日志
命令行下执行：

```Plain Text
#查看日期情况
#show variables like '%general%';
#开启日志
#SET GLOBAL general_log = 'On';
#指定日志文件
#SET GLOBAL general_log_file = '/var/lib/mysql/mysql.log';
```
