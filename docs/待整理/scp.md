# scp
对拷文件夹 (包括文件夹本身)

```Plain Text
scp -r   /home/wwwroot/www/charts/util root@192.168.1.65:/home/wwwroot/limesurvey_back/scp
```
对拷文件夹下所有文件 (不包括文件夹本身)

```Plain Text
scp   /home/wwwroot/www/charts/util/* root@192.168.1.65:/home/wwwroot/limesurvey_back/scp
```
对拷文件并重命名

```Plain Text
scp   /home/wwwroot/www/charts/util/a.txt root@192.168.1.65:/home/wwwroot/limesurvey_back/scp/b.text
```
一、将本机文件复制到远程服务器上
　　#scp /home/administrator/news.txt [root@192.168.6.129](mailto:root@192.168.6.129):/etc/squid
　　/home/administrator/ 本地文件的绝对路径
　　news.txt 要复制到服务器上的本地文件
　　root 通过root用户登录到远程服务器（也可以使用其他拥有同等权限的用户）
　　192.168.6.129 远程服务器的ip地址（也可以使用域名或机器名）
　　/etc/squid 将本地文件复制到位于远程服务器上的路径
二、将远程服务器上的文件复制到本机
　　#scp [remote@www.abc.com](mailto:remote@www.abc.com):/usr/local/sin.sh /home/administrator
　　remote 通过remote用户登录到远程服务器（也可以使用其他拥有同等权限的用户）
　　[www.abc.com](http://www.abc.com/) 远程服务器的域名（当然也可以使用该服务器ip地址）
　　/usr/local/sin.sh 欲复制到本机的位于远程服务器上的文件
　　/home/administrator 将远程文件复制到本地的绝对路径
注意两点：
　　1.如果远程服务器防火墙有特殊限制，scp便要走特殊端口，具体用什么端口视情况而定，命令格式如下：
　　#scp -p 4588 [remote@www.abc.com](mailto:remote@www.abc.com):/usr/local/sin.sh /home/administrator
　　2.使用scp要注意所使用的用户是否具有可读取远程服务器相应文件的权限。
　　如：
　　# scp /var/log/sql-slow-queries.log [root@192.168.1.50](mailto:root@192.168.1.50):/root
　　把本地 /var/log/sql-slow-queries.log 这个文件copy到1.50上面/root 目录下面