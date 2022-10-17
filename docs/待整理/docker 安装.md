# docker 安装
### 基础安装
```Plain Text
docker pull jenkins/jenkins

mkdir /home/jenkins_home 

docker run -d --name jenkins -p 8082:8080 jenkins/jenkins
docker run -d --name jenkins -p 9002:8080 -v jenkins:/var/jenkins_home jenkins/jenkins

容器内目录;/var/jenkins_home/secrets/initialAdminPassword
```
### 配置插件加速
```Plain Text
server
    {
        listen 80;
        server_name mirrors.jenkins-ci.org;
        location / {
            proxy_redirect off;
            proxy_pass https://mirrors.tuna.tsinghua.edu.cn/jenkins/;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Accept-Encoding "";
            proxy_set_header Accept-Language "zh-CN";
        }
        index index.html index.htm index.php;
        #error_page   404   /404.html;
        location ~ /\.
        {
            deny all;
        }

        access_log  /var/log/nginx/jenkins_proxy.access.log main;
        error_log   /var/log/nginx//jenkins_proxy.error.log;
    }
```
### 修改容器内maven镜像加速
```Plain Text
/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf
docker cp Jenkins_01:/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf/settings.xml /home
```
```Plain Text
修改镜像地址：
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>https://maven.aliyun.com/repository/public </url>
</mirror>
```
```Plain Text
覆盖容器内文件

docker cp /home/settings.xml Jenkins_01:/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf/settings.xml
```
