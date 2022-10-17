# 配置慢sql监控
### show variables like ‘%query%’;
```Plain Text
1.slow_query_log
该配置项是决定是否开启慢日志查询功能，配置的值有ON或者OFF.
2.slow_query_log_file
该配置项是慢日志查询的记录文件,需要手动创建.
3.long_query_time
该配置项是设置慢日志查询的时间阈值，当超过这个阈值时，慢日志才会被记录.配置的值有0(任何的sql语句都记录下来)，或者>0(具体的阈值).该配置项是以秒为单位的，并且可以设置为小数.
4.log-queries-not-using-indexes
该配置项是为了记录未使用到索引的sql语句.
```
### 如何配置慢日志查询
```Plain Text
set global slow_query_log=ON;
set global slow_query_log=OFF;
```
```Plain Text
set global long_query_time=1;
```
