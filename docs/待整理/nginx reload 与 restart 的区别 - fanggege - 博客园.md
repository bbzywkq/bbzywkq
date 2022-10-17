# nginx reload 与 restart 的区别 - fanggege - 博客园
reload --重新加载，reload会重新加载配置文件，Nginx服务不会中断。而且reload时会测试conf语法等，如果出错会rollback用上一次正确配置文件保持正常运行。

restart --重启（先stop后start），会重启Nginx服务。这个重启会造成服务一瞬间的中断，如果配置文件出错会导致服务启动失败，那就是更长时间的服务中断了。
所以，如果是线上的服务，修改的配置文件一定要备份。为了保证线上服务高可用，最好使用reload。

## reload  实现过程
![image](https://file.bbzy.online/blog/1368870-20200103170923856-1363899594.png)

## FAQ
reload 只是重新加载配置文件，不会清理nginx 的一些缓存，在有些需要清理缓存的场景需要restart ，例如upstream 后端配置的集群服务地址是域名而不是ip，当后端IP 变了，就需要清除该域名的解析缓存，此时需要重启而不是reload。