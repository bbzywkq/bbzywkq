# 解决Nginx下二级目录斜杠问题 - Holmesian Blog
注意：本文最后更新于 1689 天前，有关的内容可能已经发生变化，请参考使用。

不少网站页面习惯于在URL中的目录名后不加斜杠“/”，这在在apache下会自动添加一个斜杠从而不会造成什么问题，但是如果URL中的二级目录名后不加斜杠的话在Nginx下就会出现403 Forbidden的问题。在网上找到的比较可靠的原因供以想深究的TX进行参考：

在某些情况下（具体可参考 wiki.nginx.org），Nginx 内部重定向规则会被启动，例如，当 URL指向一个目录并且在最后没有包含“/”时，Nginx 内部会自动的做一个 301 重定向，这时会有两种情况：

1、 server\_name\_in\_redirect on（默认），URL 重定向为： server\_name 中的第一个域名 + 目录名 + /；

2、 server\_name\_in\_redirect off，URL 重定向为： 原 URL 中的域名 + 目录名 + /。

当你有多个 域名要指向同一个虚拟主机，并且你自己写 301 重定向规则把它们合并到某一个域名时，情况就更复杂了：首先，nginx 检查 URL，如果符合条件，就用该规则（你写的）做第一遍重定向，接着，检查新生成的URL，如果符合内部自动重定向之条件，就用前面提到的规则再做一次重定向。

至于 PHP 的 \$\_SERVER\["SERVER\_NAME"\]，在 nginx 中默认是由 nginx 的变量 \$server\_name提供，这时它和重定向没有关系，始终是 server\_name 设置中的第一个域名，但这是可以被改变的，在你的 nginx 配置中找到fastcgi\_param 部分，修改
fastcgi\_param SERVER\_NAME \$server\_name; 为fastcgi\_param SERVER\_NAME \$host; 但现在就要注意了，此时\$\_SERVER\["SERVER\_NAME"\] 会受你写的和 nginx 自己的重定向规则所影响而变化。

现在就清楚了，如果 MediaWiki 是通过 \$\_SERVER\["SERVER\_NAME"\] 来自己处理 URL 的话，那么在 nginx + php的默认环境下，它获得的将始终是 server\_name 设置中的第一个域名，所以造成了“不管通过什么域名访问 MediaWiki首页，都会被跳转到其中的一个域名上。”，这不是 nginx 的重定向造成的，虽然默认 server\_name\_in\_redirect 是on，但这个指令的影响范围仅仅只是 nginx 自己内部的重定向规则。

目前按照网上提供的一些主流方法，比如在 conf/nginx.conf 主配置文件里面加上

```Plain Text
    optimize_server_names off; 
    server_name_in_redirect off; 
```
在FreBSD+Nginx的架构下是无效的，而且optimize\_server\_names还对Nginx版本有限制。目前比较靠谱的方法还是使用正则来重定向：

```Plain Text

    if (-d $request_filename){ 
    rewrite ^/(.*)([^/])$ http://$host/$1$2/ permanent; 
    } 

```
将上面的代码放在相应虚拟主机配置文件的 location / {}里即可。这样做的缺点就是必须对每一个需要自动添加斜杠的虚拟主机都要加上相应的内容。

---
「倘若有所帮助，不妨酌情赞赏!」

赞赏

---
### 相关文章
* [HAProxy 区分流量特征](https://holmesian.org/Haproxy-distinguishes-flow-characteristics "HAProxy 区分流量特征")
* [临时处理OCSP域名无法访问的问题](https://holmesian.org/letsencrypt-ocsp-fix "临时处理OCSP域名无法访问的问题")
* [443端口共用的方案](https://holmesian.org/443-port-reuse-for-ss-ssl "443端口共用的方案")
* [PHP7与PHP5共存于CentOS7](https://holmesian.org/PHP7-PHP5-on-CentOS-at-the-same-time "PHP7与PHP5共存于CentOS7")
* [记录OCSP Stapling的两个问题](https://holmesian.org/OCSP-Stapling "记录OCSP Stapling的两个问题")