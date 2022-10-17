# (3条消息) Linux安装pinpoint监控，并配置springboot应用\_qq837993702的博客-CSDN博客
# 1、下载软件
## 1.1、 用到软件如下：
jdk-8u111-[linux](https://so.csdn.net/so/search?from=pc_blog_highlight&q=linux)-x64.tar.gz #jdk

apache-tomcat-8.0.36.tar.gz #tomcat

pinpoint-collector-1.8.4.war #收集器

pinpoint-web-1.8.4.war #界面展现

pinpoint-agent-1.8.4.tar.gz #探针

hbase-create.hbase #表创建脚本

hbase-1.0.3-bin.tar.gz #hbase数据库
如下图，百度云下载地址：
链接：https://pan.baidu.com/s/1Sou4ennOyAPrGEdKCi6TKg
提取码：l73m

![image](https://file.bbzy.online/blog/20200408161550832.png)

# 2、安装JDK
# 3、安装hbase
```Plain Text
$sudo cd /usr/local                                                   #进入/usr/local目录
$sudo tar -zxvf /var/ftp/pub/hbase-1.2.6.1-bin.tar.gz                 #解压安装文件
$sudo ./hbase-1.2.6.1/bin/start-hbase.sh                              #启动hbase
$sudo ./hbase-1.2.6.1/bin/hbase shell /var/ftp/pub/hbase-create.hbase #创建pinpoint表
1234
```
脚本执行完成后可查看导入的表：

![image](https://file.bbzy.online/blog/20200408163926997.png)

# 4、安装tomcat
# 5、安装pinpoint-collector
```Plain Text
$sudo cd /usr/local/ #进入安装目录
$sudo tar -zxvf /var/ftp/pub/apache-tomcat-9.0.24.tar.gz #解压tomcat
$sudo mv apache-tomcat-9.0.24/ apache-tomcat-1080/ #重命名目录
$sudo cd apache-tomcat-1080/webapps/
$sudo rm -rf * #删除所有默认应用
$sudo unzip /var/ftp/pub/pinpoint-collector-1.8.4.war -d ROOT #解压pinpoint-collector到/webapps/ROOT目录
123456
```
修改/conf/server.xml文件，将8005、8080、8009端口分别改为1005、1080、1009

```Plain Text
$sudo cd /usr/local/apache-tomcat-1080/bin
$sudo ./startup.sh #启动tomcat容器
12
```
# 6、安装pinpoint-web
```Plain Text
$sudo cd /usr/local/ #进入安装目录
$sudo tar -zxvf /var/ftp/pub/apache-tomcat-9.0.24.tar.gz #解压tomcat
$sudo mv apache-tomcat-9.0.24/ apache-tomcat-2080/ #重命名目录
$sudo cd apache-tomcat-2080/webapps/
$sudo rm -rf * #删除所有默认应用
$sudo unzip /var/ftp/pub/pinpoint-web-1.8.4.war -d ROOT #解压pinpoint-web到/webapps/ROOT目录
123456
```
修改/conf/server.xml文件，将8005、8080、8009端口分别改为2005、2080、2009

```Plain Text
$sudo cd /usr/local/apache-tomcat-2080/bin
$sudo ./startup.sh #启动tomcat容器
12
```
# 7、部署pinpoint-agent
先解压pinpoint-agent到任意目录，本文解压到/home/agent目录

```Plain Text
 $sudo cd /home #进入安装目录
 $sudo mkdir agent #创建文件夹
 $sudo cd agent #进入安装文件夹
 $sudo tar -zxvf /var/ftp/pub/pinpoint-agent-1.8.4.tar.gz #解压pinpoint-agent文件
1234
```
## 7.1、pinpoint-agent配置和参数
```Plain Text
pinpoint-agent的配置文件为/pinpoint.config，除                    profiler.collector.ip参数，其他参数可保持不变。
profiler.collector.ip=127.0.0.1 #后面的ip地址为pinpoint-collector安装地址
12
```
## 7.2、监控的项目启动方式
1、Linux环境

```Plain Text
在$TOMCAT_HOME/bin/目录新增setenv.sh文件（注意.sh文件头以“#!/bin/sh”为第一行），添加配置：
#!/bin/sh
CATALINA_OPTS="$CATALINA_OPTS -javaagent:/home/agent/pinpoint-bootstrap-1.8.4.jar -Dpinpoint.agentId=test-01 -Dpinpoint.applicationName=test"
123
```
2、Windows环境

```Plain Text
在$TOMCAT_HOME/bin/目录新增setenv.bat文件，添加配置：
set CATALINA_OPTS=%CATALINA_OPTS% -javaagent:E:/agent/pinpoint-bootstrap-1.8.4.jar -Dpinpoint.agentId=test-01 -Dpinpoint.applicationName=test
如果日志中输出以下信息，则表示配置成功：
123
```
3、springboot环境配置

```Plain Text
只需在java命令后面加上-javaagent:/home/agent/pinpoint-bootstrap-1.8.4.jar -Dpinpoint.agentId=xxx -Dpinpoint.applicationName=xxx参数，如：java -javaagent:/home/agent/pinpoint-bootstrap-1.8.4.jar -Dpinpoint.agentId=test-01 -Dpinpoint.applicationName=test -jar test.jar
1
```
4、访问pinpoint-web

```Plain Text
 打开安装地址：http://10.10.240.233:2080 可查看pinpoint收集情况
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200408171129989.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxODM3OTkzNzAy,size_16,color_FFFFFF,t_70)
12
```