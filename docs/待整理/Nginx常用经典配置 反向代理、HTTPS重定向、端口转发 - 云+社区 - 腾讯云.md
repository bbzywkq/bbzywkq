# Nginx常用经典配置|反向代理、HTTPS重定向、端口转发 - 云+社区 - 腾讯云
Nginx常用经典配置|反向代理、HTTPS重定向、端口转发 - 云+社区 - 腾讯云

![image](https://file.bbzy.online/blog/nbin5ncm70.png)

二级目录映射 目前前后端项目分离场景多了以后，一般是前端一个端口，后端一个端口。

如前端是[https://example.com/index.html，调用的接口是https://example.com:4433](https://example.com/index.html，调用的接口是https://example.com:4433)

如此部署对于一些小项目未免有些麻烦，当然你在公网环境下也可以选择使用子域名、其他域名进行跨域访问。

这里说的是同一个域名，同一个端口，让前后端同时进行访问服务。

前端地址：[https://example.com/index.html](https://example.com/index.html)

接口地址：[https://example.com/api/](https://example.com/api/)

这里先记录我已经测试通过的反向代理的方式，即不改变原本的server配置。直接通过反向代理将example.com/api 重定向到 example.com:4443/

```Plain Text
location ^~ /api/ {
    proxy_pass  https://example.com:4433/;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
值得一提的是，location段的^\~是代表某个字符作为开头匹配，这里就是以/api/作为开头进行匹配URL规则。

这里不能写作~~，因为~~是正则匹配的意思，用了正则就不能再proxy\_pass段配置URI了，所谓URI就是4433端口后面的/。

如果不写/，当访问example.com/api/index.php时，会代理到example.com:4433/api/index.php。并不能定位到后端的根路径，所以这里以/结束。

非标准HTTPS端口重定向 如果想让你的非标准https端口，如2083支持HTTP跳转HTTPS访问，请参照如下配置。

```Plain Text
error_page 497 https://$host:2083$request_uri;
```
如果不这么配置，默认当用户不确定网站协议时，采用了HTTP协议访问你的HTTPS网站就会出现无法访问。

错误如：The plain HTTP request was sent to HTTPS port

HTTP强制跳转HTTPS 日常为了保证访客安全性，我们常常需要让全站保持HTTPS访问，那么你可以通过以下配置。

```Plain Text
server {
    listen 80 default_server;
    server_name example.com;
    rewrite ^(.*) https://$server_name$1 permanent;
    #上面的rewrite也可以写作
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl;
    server_name example.com;
}
```
做法是，让80监听到的HTTP链接全部重定向到HTTPS端口中。

HSTS策略保持HTTPS连接 与此同时，你也可以通过开启HSTS策略强制让访客浏览器保持使用HTTPS链接，添加如下代码：

* add\_header Strict-Transport-Security "max-age=31536000; includeSubDomains;preload" always;
* max-age：设置单位时间（秒）内強制使用 HTTPS 连接，这里为1年
* includeSubDomains：可选，站点所有子域同时生效
* preload：可选，非规范值，用于定义使用『HSTS 预加载列表』
* always：可选，保证所有响应都发送此响应头，包括各种內置错误响应

Nginx反向代理 反向代理的场景很多，例如前面的前后端统一域名端口，例如[负载均衡](https://cloud.tencent.com/product/clb?from=10680)等。

```Plain Text
location / {
    proxy_pass  http://example.com;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
完整参数配置

```Plain Text
location / {
    proxy_pass  http://example.com;
    proxy_redirect     off;
    proxy_set_header   Host             $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
    proxy_max_temp_file_size 0;
    proxy_connect_timeout      90;
    proxy_send_timeout         90;
    proxy_read_timeout         90;
    proxy_buffer_size          4k;
    proxy_buffers              4 32k;
    proxy_busy_buffers_size    64k;
    proxy_temp_file_write_size 64k;
}
```
端口转发 Nginx端口转发性能也非常强大，可以用于内网[数据库](https://cloud.tencent.com/solution/database?from=10680)、其他服务端口外露的场景。

如将内网的192.168.1.2MySQL数据库端口通过Nginx所在服务器的33062端口进行外露。

```Plain Text
upstream TCP3306 {
    hash $remote_addr consistent;
    server 192.168.1.2:3306;
}

server {
    listen 33062;
    proxy_connect_timeout 5s;
    proxy_timeout 300s;
    proxy_pass TCP3306;
}
```