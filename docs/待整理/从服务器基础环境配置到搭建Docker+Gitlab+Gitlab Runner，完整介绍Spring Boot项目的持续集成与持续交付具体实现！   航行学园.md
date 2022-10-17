# 从服务器基础环境配置到搭建Docker+Gitlab+Gitlab Runner，完整介绍Spring Boot项目的持续集成与持续交付具体实现！ | 航行学园
[航行学园](http://www.voycn.com/ "首页")

* [首页](http://www.voycn.com/)
* [前端](http://www.voycn.com/web)
* [分类](http://www.voycn.com/classify)
* [编程语言](http://www.voycn.com/lang)
* [移动开发](http://www.voycn.com/mobile)

# 从服务器基础环境配置到搭建Docker+Gitlab+Gitlab Runner，完整介绍Spring Boot项目的持续集成与持续交付具体实现！
* [首页](http://www.voycn.com/) >
* [栏目](http://www.voycn.com/article) >
* [Android 颜色色值与 alpha 分离解决方案](http://www.voycn.com/article/android-yansesezhiyu-alpha-fenlijiejuefangan) >

### 1\. 序言
在大学的课程学习，非常注重团队协作的培养，在企业开发中，团队协作开发项目的场景更是甚多。另外，在当下的热门技术栈中，微服务开发模式、前后端分离开发模式逐渐盛行，Spring Boot、VUE等热门技术，更是吸引了众多技术人员。当下的项目开发过程中，人们更加追求高内聚、低耦合，特别是前后端分离开发模式的提出。

但是，做到低耦合的同时，也有一系列的问题产生。比如在团队协作开发过程中，后台开发人员新开发了一个功能，需要交给前端来配置，或者是交给测试人员进行测试，怎么实现？以往的操作是后台开发人员push项目到Git，前端/测试pull项目到本地，然后再编译、开发前端和测试项目。这要求无论是后端、前端开发人员，还是测试人员，每个人的电脑都需要有相同的配置，整个开发流程非常繁琐复杂。

所以，Gitlab提出了的持续集成与持续交付的概念，即后台开发人员实现新功能后，将项目Push到Gitlab服务器，Gitlab服务器能够将项目自动集成，然后编译项目，并将项目部署到服务器。而对于前端开发人员和测试人员，只需要得到部署后的项目链接（或IP地址），即可进行前端项目的开发，以及各种接口的测试。在这个过程中，只需要后台开发人员和服务器的配置一致即可，开发人员与测试人员的配置无需关注。

本文将**基于Ubuntu18.04**系统，从**基本开发环境配置、Docker安装与Gitlab安装，以及Spring Boot项目的持续集成与持续交付功能**方面，讲述完整的使用过程。

> 注意，完整的部署过程需要具备Spring Boot、Linux和Docker的相关知识，可参考：  

> https://www.zxdmy.com/category/linux  

> https://www.zxdmy.com/category/docker  

> https://www.zxdmy.com/category/java  

### 本文主要内容：
1\. 序言 2. 配置镜像源 2.1 配置阿里云镜像源 2.2 配置华为云镜像源 3. 安装JDK 3.1 下载与上传JDK 3.2 安装与配置环境变量 3.3 测试安装 3.4 部分错误示例 4. 安装Maven 4.1 下载与上传 4.2 安装与配置环境变量 4.3 测试安装 4.4 配置Maven镜像源 5. 安装Docker 5.1 安装Docker. 5.2 配置Docker镜像源 6. 安装Docker Compose 6.1 X64系统的安装与验证 6.2 Arm64系统的安装与验证 7. 安装Gitlab 7.1 常用命令 7.2 安装Gitlab 7.3 配置发件邮箱 7.4 创建项目 8. 安装与使用Gitlab Runner 8.1 安装Gitlab Runner 8.2 注册Runner与Demo测试 8.3 问题解决 9. 关机与开机 参考资料

### 2\. 配置镜像源
为什么配置镜像源？

因为Ubuntu系统原始的镜像源地址是国外服务器，国内服务器下载速度非常慢，所以需要替换成国内的镜像源，提高软件下载速度。

如果是阿里云的服务器，推荐使用阿里云的镜像，如果是华为云的服务器，推荐使用华为云的镜像。

（笔者华为云的服务器用阿里云的镜像，无法访问，报404错误）

#### 2.1 配置阿里云镜像源
阿里云的镜像源网址：https://developer.aliyun.com/mirror/

阿里云Ubuntu镜像源配置网址：https://developer.aliyun.com/mirror/ubuntu

主要操作步骤如下：

A. 备份 `sources.list` 文件，参考命令：

```Plain Text
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak

```
B. 使用熟悉的编辑器（如vi）打开 `sources.list`，参考命令：

```Plain Text
vi /etc/apt/sources.list

```
C. 将所有的 `http://archive.ubuntu.com/` 替换为 `http://mirrors.aliyun.com/`

D. 保存即可

E. 执行 `apt-get update` 更新索引。

#### 2.2 配置华为云镜像源
华为云的镜像源网址：https://mirrors.huaweicloud.com/

A. 备份`sources.list` ，同上。

B. 修改`sources.list`文件，将`http://archive.ubuntu.com`和`http://security.ubuntu.com`替换成`http://mirrors.huaweicloud.com`，参考命令：

```Plain Text
sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.huaweicloud.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.huaweicloud.com@g" /etc/apt/sources.list

```
或者直接使用下面的命令，直接下载替换文件（注意系统是不是bionic版本）：

```Plain Text
wget -O /etc/apt/sources.list https://mirrors.huaweicloud.com/repository/conf/Ubuntu-Ports-bionic.list

```
C. 保存即可

D. 执行 `apt-get update` 更新索引。

更新镜像源后的 `sources.list` 文件如下：

![image](https://file.bbzy.online/blog/c402c7e41e4c5f45d9fb36053580d9fb.png)

### 3\. 安装JDK
为什么要安装JDK？

因为项目是Java开发的。

下文以 **JDK 1.8.0\_181** 为例

#### 3.1 下载与上传JDK
Oracle官方下载地址：https://www.oracle.com/java/technologies/javase-downloads.html

华为云镜像下载地址：https://mirrors.huaweicloud.com/java/jdk/

可以使用FinalShell进行上传：

![image](https://file.bbzy.online/blog/fcf190c89f4808f6a71b1dd75be9b46a.png)

#### 3.2 安装与配置环境变量
主要流程参考命令如下：

A. 解压缩（在压缩包的目录下运行）

```Plain Text
tar -zxvf jdk-8u181-linux-x64.tar.gz

```
B. 创建目录

```Plain Text
mkdir -p /usr/local/java

```
> Linux系统一般将用户按照的软件放在 usr/local 目录下。

> \-p：递归创建，即创建子目录

C. 移动安装包

```Plain Text
mv jdk1.8.0_181/ /usr/local/java/

```
D. 设置所有者

```Plain Text
chown -R root:root /usr/local/java/

```
> \-R ：递归设置，即子目录即目录下的所有文件均设置所有者

E. （可选，一般不用）打开系统环境变量配置文件

```Plain Text
vi /etc/environment

```
F. （可选，一般不用）添加环境变量

```Plain Text
# 默认有这行
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"

# 从这里开始添加
export JAVA_HOME=/usr/local/java/jdk1.8.0_181
export JRE_HOME=/usr/local/java/jdk1.8.0_181/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib

```
G. 打开用户环境变量配置文件

```Plain Text
vi /etc/profile

```
H. 添加用户环境变量信息

```Plain Text
# 默认有这段
if [ "$PS1" ]; then
  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then
    # The file bash.bashrc already sets the default PS1.
    # PS1='\h:\w\$ '
    if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
    fi
  else
    if [ "`id -u`" -eq 0 ]; then
      PS1='# '
    else
      PS1='$ '
    fi
  fi
fi

if [ -d /etc/profile.d ]; then
  for i in /etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi

# 从这里开始添加，文件名注意修改为自己的文件名
export JAVA_HOME=/usr/local/java/jdk1.8.0_181
export JRE_HOME=/usr/local/java/jdk1.8.0_181/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin
# 到这里结束

```
I. 使用户环境变量生效

```Plain Text
source /etc/profile

```
#### 3.3 测试安装
```Plain Text
java -version

```
正确输出：

（可选操作）为其他用户更新用户环境变量：

```Plain Text
su snzl #snzl为其他用户名
source /etc/profile

```
#### 3.4 部分错误示例
如果安装完成后，提示错误信息

```Plain Text
-bash: /usr/local/java/jdk1.8.0_181/bin/java: cannot execute binary file: Exec format error

```
如图：

应考虑：

① 给bin文件夹下的文件增加执行权限

```Plain Text
chmod +x filename

```
② 选择的JDK错误，如系统架构（arm64、X64、arm32、X32）等。

### 4\. 安装Maven
为什么要安装Maven？

因为项目使用Maven来管理包。

下文以 **maven 3.6.0** 为例。

#### 4.1 下载与上传
Apache官方下载地址：https://maven.apache.org/download.cgi

华为云镜像下载地址：https://repo.huaweicloud.com/apache/maven/maven-3/

上传可以使用FinalShell。

#### 4.2 安装与配置环境变量
基本操作方法同JDK，参考命令如下：

A. 解压缩（在压缩包的目录下运行）

```Plain Text
tar -zxvf apache-maven-3.6.0-bin.tar.gz

```
B. 创建目录

```Plain Text
mkdir -p /usr/local/maven

```
> Linux系统一般将用户按照的软件放在 usr/local 目录下。

> \-p：递归创建，即创建子目录

C. 移动安装包

```Plain Text
mv apache-maven-3.6.0 /usr/local/maven/

```
D. 设置所有者

```Plain Text
chown -R root:root /usr/local/maven/

```
> \-R ：递归设置，即子目录即目录下的所有文件均设置所有者

E. 打开用户环境变量配置文件

```Plain Text
vi /etc/profile

```
F. 添加用户环境变量信息

```Plain Text
# 默认有这段
if [ "$PS1" ]; then
  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then
    # The file bash.bashrc already sets the default PS1.
    # PS1='\h:\w\$ '
    if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
    fi
  else
    if [ "`id -u`" -eq 0 ]; then
      PS1='# '
    else
      PS1='$ '
    fi
  fi
fi

if [ -d /etc/profile.d ]; then
  for i in /etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi

# 从这里开始添加, 如果原来有JDK配置，直接追加即可
export M2_HOME=/usr/local/maven/apache-maven-3.6.0
export CLASSPATH=$CLASSPATH:$M2_HOME/bin
export PATH=$PATH:$M2_HOME/bin
# 到这里结束

```
如图：

I. 使用户环境变量生效

```Plain Text
source /etc/profile

```
#### 4.3 测试安装
```Plain Text
mvn -v

```
正确输出：

#### 4.4 配置Maven镜像源
为什么要配置Maven镜像源？

因为项目要下载各种包，使用国内的镜像源，下载速度快。

镜像源主要有两个，一般用阿里云或者华为云的。主要看虚拟机的服务商是哪个。

阿里云Maven镜像源网址：https://developer.aliyun.com/mirror/maven

阿里云镜像配置：

```Plain Text
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>

```
或（这个好像是旧版，笔者本文用这个）

```Plain Text
<mirror>
    <id>alimaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>

```
华为云镜像源网址：https://mirrors.huaweicloud.com/

华为云镜像源配置：

```Plain Text
<mirror>
    <id>huaweicloud</id>
    <mirrorOf>*</mirrorOf>
    <url>https://repo.huaweicloud.com/repository/maven/</url>
</mirror>

```
如何配置？

其实主要是修改Maven安装目录下的 conf/settings.xml 文件。

在settings.xml文件的 ……  标签里添加上述配置代码即可。

参考命令：

```Plain Text
vi /usr/local/maven/apache-maven-3.6.0/conf/settings.xml

```
> 注意：

> 一般情况下（特别是Windows系统），Maven都会在用户文件夹下生成一个.m2的文件，这个文件是针对当前用户有效的，这个文件夹里也有一个settings.xml文件。如果在这个文件夹下配置上述镜像源，则只针对当前用户有效。一般是多用户系统使用这种配置。

如何验证配置是否生效？使用下面命令即可：

```Plain Text
mvn help:system

```
> 这个命令是干嘛用的呢？

> 官网给出的解释是：Displays a list of the platform details like system properties and environment variables.

> 这个命令可以打印出来所有的环境配置，对开发非常有用。

> 首次运行的时候，会自动帮我们到Maven中央仓库下载缺省的或者Maven中央仓库更新的各种配置文件和类库（jar包）到Maven本地仓库中。这时候可以观察下载路径，即可判断是否生效。

### 5\. 安装Docker
为什么用Docker？

因为Docker好用。

#### 5.1 安装Docker.
参考命令如下：

A. 卸载旧版本

```Plain Text
apt-get remove docker docker-engine docker.io containerd runc

```
B. 使用 APT 安装

```Plain Text
apt install docker.io

```
C. 验证安装是否成功

```Plain Text
docker version

```
如图：



#### 5.2 配置Docker镜像源
如果你的服务器是阿里云的，则选择阿里云的镜像加速地址。

如果你的服务器是华为云的，则选择华为云的镜像加速地址。

华为云镜像中心网址：https://console.huaweicloud.com/swr/?region=cn-north-4#/app/swr/huaweiOfficialList

阿里云镜像中心网址：https://www.aliyun.com/product/acr?source=5176.11533457&userCode=isjae3ee

访问后，进入“管理控制台”即可。

使用下面的命令直接添加到文件（记得替换下面的XXXXXX）：

```Plain Text
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://XXXXXX.mirror.swr.myhuaweicloud.com"]
}
EOF

```
然后重启Docker，使其生效（依次执行）：

```Plain Text
systemctl daemon-reload
systemctl restart docker

```
验证配置是否成功：

```Plain Text
docker info

```
示例输出（主要看最后几行）：

```Plain Text
Client:
 Debug Mode: false

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 19.03.6

######  这里省略大段信息

 Insecure Registries:
  127.0.0.0/8
 Registry Mirrors:
  https://XXXXXX.mirror.swr.myhuaweicloud.com/    # 看这里
 Live Restore Enabled: false

WARNING: No swap limit support

```
### 6\. 安装Docker Compose
为什么用Docker Compose？

因为Docker Compose项目是 Docker 官方的开源项目，能够实现对 Docker 容器集群的快速编排，非常好用。

#### 6.1 X64系统的安装与验证
首先访问Docker Compose的官方开源项目网站：https://github.com/docker/compose/releases ，找到 `Latest release` 版本，记下版本号。

![image](https://file.bbzy.online/blog/a14420b0c6b3a32c3fd2997132374ead.png)

然后使用下面的命令一键安装（注意替换版本号）：

```Plain Text
curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

```
如果安装太慢，使用下面的备用链接（注意替换版本号）：

```Plain Text
curl -L https://get.daocloud.io/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

```
很快安装完成，这时docker-compose不是可执行文件。为其增加可执行权限：

```Plain Text
chmod +x /usr/local/bin/docker-compose

```
验证安装成功与否的命令如下：

```Plain Text
docker-compose version

```
示例输出：

```Plain Text
docker-compose version 1.25.4, build 8d51620a
docker-py version: 4.1.0
CPython version: 3.7.5
OpenSSL version: OpenSSL 1.1.0l  10 Sep 2019

```
#### 6.2 Arm64系统的安装与验证
由于华为鲲鹏服务器采用华为自研cpu ARMv8架构，所以安装方式和一般服务器安装方式不同，即华为云服务器需要用pip方式安装。

A. 安装pip

```Plain Text
sudo apt-get install libssl-dev libffi-dev python3 python3-pip

```
B. 使用pip命令安装Docker Compose。如下：

```Plain Text
pip install docker-compose

```
如果用上面这个命令下载很慢的话，替换成国内镜像下载，参考命令如下：

```Plain Text
pip3 install -i https://repo.huaweicloud.com/repository/pypi/simple docker-compose
或
pip3 install -i https://mirrors.aliyun.com/pypi/simple docker-compose
或
python -m pip install -U -i https://mirrors.aliyun.com/pypi/simple docker-compose

```
C. 验证安装成功与否：

```Plain Text
docker-compose version

```
D. 安装成功后的输出：

```Plain Text
docker-compose version 1.27.4, build unknown
docker-py version: 4.3.1
CPython version: 3.6.9
OpenSSL version: OpenSSL 1.1.1  11 Sep 2018

```
### 7\. 安装Gitlab
使用Docker Compose一键安装。

#### 7.1 常用命令
启动：docker-compose up

后台启动：docker-compose up -d

停止：docker-compose down

查看容器：docker ps

查看全部容器：docker ps -a

#### 7.2 安装Gitlab
Linux有个不成文的规则：所有用户手动安装的软件，均放在 `/usr/local/` 目录下，

首先进入 `/usr/local` 目录下，创建一个名为 `docker` 的文件夹，并在该文件夹里创建一个名为 `gitlab` 的文件夹，用来放Gitlab的配置文件。

参考命令（依次执行）：

```Plain Text
cd /usr/local
mkdir docker
cd docker
mkdir gitlab
cd gitlab

```
然后在 gitlab文件夹下新建一个名为 docker-compose.yaml 的配置文件，名字是固定的.

```Plain Text
vi docker-compose.yaml

```
写入内容：

```Plain Text
version: '3'
services:
    gitlab:
        image: 'twang2218/gitlab-ce-zh'
        restart: always
        # 项目的主机名，填写IP或域名，如果端口号非80，请添加端口号
        hostname: 'gitlab.yourdomain.com'
        environment:
            TZ: 'Asia/Shanghai'
            GITLAB_OMNIBUS_CONFIG: |
                external_url 'http://gitlab.cxhit.com'
                gitlab_rails['time_zone'] = 'Asia/Shanghai'
                gitlab_rails['gitlab_shell_ssh_port'] = 2222
                unicorn['port'] = 8888
                nginx['listen_port'] = 80
                # 配置邮箱，以qq邮箱为例
                gitlab_rails['smtp_enable'] = true
                gitlab_rails['smtp_address'] = "smtp.qq.com"
                gitlab_rails['smtp_port'] = 465
                gitlab_rails['smtp_user_name'] = "邮箱@qq.com"
                gitlab_rails['smtp_password'] = "smtp授权码"
                gitlab_rails['smtp_domain'] = "qq.com"
                gitlab_rails['smtp_authentication'] = "login"
                gitlab_rails['smtp_enable_starttls_auto'] = true
                gitlab_rails['smtp_tls'] = true
                gitlab_rails['gitlab_email_from'] = "邮箱@qq.com"
                user['git_user_email'] = "邮箱@qq.com"
        ports:
            - '8099:80'
            - '8443:443'
            - '2222:22'
        volumes:
            - ./config:/etc/gitlab
            - ./data:/var/opt/gitlab
            - ./logs:/var/log/gitlab

```
> :set paste 使用这个vi命令，原样粘贴。

> 端口ports：左边宿主机（即服务器），右边容器

使用如下命令后台启动容器：

```Plain Text
docker-compose up -d

```
> \-d ：后台执行，不加的话，可查看详细启动信息

#### 7.3 配置发件邮箱
如果上面的配置中的邮箱无法发送邮件，可采用下面的方式配置。

首先进入gitlab的安装目录（本文中的/usr/local/docker/gitlab）中的config文件夹下，参考命令：

```Plain Text
cd /usr/local/docker/gitlab/config

```
然后查看全部文件，即可看到名为gitlab.rb的文件。

使用vi编辑器打开：

```Plain Text
vi gitlab.rb

```
按 / 后，输入 smtp ，按回车键后，定位到邮件配置模块。

取消前面所有的 # ，按照下面的示例修改配置：

```Plain Text
### GitLab email server settings
###! Docs: https://docs.gitlab.com/omnibus/settings/smtp.html
###! **Use smtp instead of sendmail/postfix.**

### 从这里开始，下文以qq邮箱为例
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "邮箱@qq.com"
gitlab_rails['smtp_password'] = "smtp授权码"
gitlab_rails['smtp_domain'] = "qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true

### 下面两行需要手动添加
gitlab_rails['gitlab_email_from'] = "邮箱@qq.com"
user['git_user_email'] = "邮箱@qq.com"

### 到这里结束
###! **Can be: 'none', 'peer', 'client_once', 'fail_if_no_peer_cert'**
###! Docs: http://api.rubyonrails.org/classes/ActionMailer/Base.html


```
然后进入gitlab容器，参考命令（依次执行）：

```Plain Text
docker ps
sudo docker exec -it 容器ID /bin/bash  

```
重新配置，并重启容器，参考命令如下（依次执行，时间较长）：

```Plain Text
gitlab-ctl reconfigure
gitlab-ctl restart

```
然后进入gitlab控制台，参考命令：

```Plain Text
gitlab-rails console

```
稍等片刻，出来 > 箭头，即可输入发送测试邮件的命令。

参考命令：

```Plain Text
Notify.test_email('*******@qq.com','email title','email content desc').deliver_now

```
如果能收到邮件，则说明配置正确。

![image](https://file.bbzy.online/blog/433dc2eda35667e561bad2ab552a3b9e.png)

#### 7.4 创建项目
关于gitlab的具体使用方法，请参考百度。

主要操作有四个：

A. `commit`：是将本地修改过的文件提交到本地库中。有些修改是不需要同步至服务器的，至于什么时候同步，由用户自己选择。

B. `push`：是将本地库中的最新信息发送给远程库。

C.`fetch`：是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。

D. `pull`：则是将远程主机的最新内容拉下来后直接合并，即：`git pull = git fetch + git merge`，这样可能会产生冲突，需要手动解决。

### 8\. 安装与使用Gitlab Runner
#### 8.1 安装Gitlab Runner
官网的安装参考链接：https://docs.gitlab.com/runner/install/linux-manually.html

命令如下：

A. 安装（不同系统安装命令不同，详情看上面链接）

```Plain Text
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

```
B. 授权可执行权限

```Plain Text
sudo chmod +x /usr/local/bin/gitlab-runner

```
C. 创建持续集成用户

```Plain Text
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

```
D. 运行gitlab-runner服务（依次执行）

```Plain Text
sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
sudo gitlab-runner start

```
如果上面的start命名无法运行，请使用

```Plain Text
sudo gitlab-runner run

```
关于gitlab-runner的详细使用方法，可以使用下面的命令查看学习

```Plain Text
gitlab-runner --help

```
到这里，gitlab-runner的安装过程结束。

#### 8.2 注册Runner与Demo测试
然后我们回到gitlab网站，打开前面创建的Spring Boot项目，在项目页面中找到：设置-》CI/CD，然后展开runner下拉栏：

![image](https://file.bbzy.online/blog/35b50838ce9641607d9afb57b48af8b0.png)

在专用Runner栏，继续往下翻，找到URL和Token，我们用的的信息是这两个：

![image](https://file.bbzy.online/blog/dbd017d8634274c081d44386d6f7b73a.png)

然后回到服务器，输入下面的命令开始注册：

```Plain Text
gitlab-runner register

```
下图（有一些配置错误）仅供参考，详细的说明请继续看：

![image](https://file.bbzy.online/blog/7c6ef1b51887a8ba40c7f6834faddac9.png)

详细说明如下（注意看注释）：

```Plain Text
### 输入注册的命令：
root@ubuntu:/usr/local/docker/gitlab# sudo gitlab-runner register

Runtime platform                                    arch=amd64 os=linux pid=128903 revision=e95f89a0 version=13.4.1
Running in system-mode.

### 输入注册的URL，复制上面的
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
http://Your IP:8099/

### 输入注册的token，复制上面的
Please enter the gitlab-ci token for this runner:
XXXXXXXXXXXX

### 输入项目描述。可以为空
Please enter the gitlab-ci description for this runner:
[ubuntu]: project description

### 输入项目的标签。
### 注意：填写标签后，每次push项目中的job有此标签，才会触发持续集成操作
### 如果为空，则每次提交都触发。
Please enter the gitlab-ci tags for this runner (comma separated):
test,deploy

Registering runner... succeeded                     runner=27ZJ1iAs

### 选择执行器，一般选择shell。
Please enter the executor: shell, ssh, virtualbox, docker+machine, docker-ssh+machine, custom, docker-ssh, kubernetes, docker, parallels:
shell

Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded! 

```
至此，返回到gitlab网站，刷新页面，在专用Runner栏往下翻，即可看到注册成功的Runner：

![image](https://file.bbzy.online/blog/a5a097d5a6de2b8aee473e55cf35dc50.png)

然后返回到本地的项目，在项目的根目录，创建两个文件，并分别写入如下内容：

![image](https://file.bbzy.online/blog/3b5cb410d8085333d1ff35ddc9121707.png)

.gitlab-ci.yml ：

```Plain Text
stages:
- deploy #步骤名称

deploy:
  stage: deploy #步骤名称
  only:
  - master #当且仅当master分支合并时 出发该ci脚本
  script:  #ci脚本
  ### 执行mvn命令打包，生成jar包
  - mvn clean package 
  ### 执行docker命令创建镜像，调用Dockerfile文件
  - "docker build . -t cicdtest:last"
  ### 停止镜像cicdtest_image，因为有修改
  - docker stop cicdtest_image || true
  ### 删除镜像cicdtest_image，即清理历史镜像
  - docker rm cicdtest_image || true
  ### 重新构建镜像，8181端口是服务器的端口，8080端口是容器的端口，即项目中设置的端口（默认8080）
  - docker run --name cicdtest_image -p 8181:8080 -d cicdtest:last

```
Dockerfile ：

```Plain Text
# 构建docker镜像
# 基础镜像使用Java
FROM openjdk:8-jdk-alpine
# 作者
MAINTAINER cxh
# VOLUME指定了临时文件目录为/tmp
# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
VOLUME /tmp
# 将jar包添加到容器中并更名为app.jar
# 注意：这个jar包文件名，请前方服务器 目录查看
COPY target/cicdtest-0.0.1-SNAPSHOT.jar /app/app.jar

# 这个暂且不用
# COPY target/lib /app/lib

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","-Dspring.profiles.active=prod","/app/app.jar"]

```
上面两个文件写完后，在项目的Controller类中写几个测试用例：

```Plain Text
package com.cicdtest.cicdtest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @GetMapping(value = "/getInfo/{id}")
    public String getInfo(@PathVariable String id){
        return "获取ID为"+id+"的用户的信息";
    }
}

```
然后执行**Commit**和**Push**命令，将项目推送到Gitlab。

返回Gitlab网站，查看侧边栏的 **CI/CD -> 流水线** 模块，即可看到提交的项目正在构建。

![image](https://file.bbzy.online/blog/f954fcd7c5d8f1e7c67c9d9279a92bf4.png)

然后点击 上图标注 位置的按钮，进入新页面，点击 下图标注的位置：

![image](https://file.bbzy.online/blog/6f7842b55ba8cdca7b039ded2be7e7c4.png)

即可查看详细执行的命令：

![image](https://file.bbzy.online/blog/0811ecf636f70464b407b20b564d332b.png)

这里可以观察项目部署中的错误，及时调整和修改`.gitlab-ci.yml`、`Dockerfile`两个文件。

然后，通过服务器IP加端口的形式，即可访问Demo中的实例：

![image](https://file.bbzy.online/blog/d047cfb0f92ad7c857a6611e79cbdb5b.png)

至此，测试人员、前端开发人员即可调用该API。

#### 8.3 问题解决
参考：https://blog.csdn.net/ujm097/article/details/80794740

### 9\. 关机与开机
如果是本地虚拟机里创建的服务器，关机前，记得在服务器将所有镜像停止，再关机，否则关机时，会花费较长的时间：

```Plain Text
docker ps
docker stop 镜像ID

```
前面配置中，gitlab已经设置了开机自启。

如果下次开机时，很长时间（5分钟以上），gitlab没有启动，可使用下面命令开启：

```Plain Text
docker-compose up -d

```
gitlab-runner 启动命令：

```Plain Text
gitlab-runner run

```
### 参考资料
> \[1\] https://mirrors.huaweicloud.com/
\[2\] https://www.zxdmy.com/article/21
\[3\] https://blog.csdn.net/Delicious\_Life/article/details/104623788/
\[4\] https://blog.csdn.net/weixx3/article/details/80331538
\[5\] https://www.zhihu.com/question/396914065
\[6\] http://maven.apache.org/plugins/maven-help-plugin/system-mojo.html
\[7\] https://www.cnblogs.com/Lints/p/11163073.html
\[8\] https://www.zxdmy.com/article/33
\[9\] https://blog.csdn.net/weixin\_44456979/article/details/105718165
\[10\] https://blog.csdn.net/smiletudy/article/details/104840048
\[11\] https://www.cnblogs.com/sanduzxcvbnm/p/13820198.html
\[12\] https://www.cnblogs.com/xhyan/p/6593075.html
\[13\] https://blog.csdn.net/SirLZF/article/details/88998450
\[14\] https://zhuanlan.zhihu.com/p/86158304
\[15\] https://www.cnblogs.com/sanduzxcvbnm/p/13820198.html
\[16\] https://blog.csdn.net/weixin\_43915643/article/details/105991904
\[17\] https://blog.csdn.net/wbf810207/article/details/90412358
\[18\] https://blog.csdn.net/aixiaoyang168/article/details/72168834

来源url

https://blog.csdn.net/cxh\_1231/article/details/115479535

栏目

[编程语言](http://www.voycn.com/lang)

## 最新内容
* [SparkStreaming接收Flume数据方式一：Push模式](http://www.voycn.com/article/sparkstreamingjieshouflumeshujufangshiyipushmoshi)
* [虚拟机安装Oracle RAC](http://www.voycn.com/article/xunijianzhuangoracle-rac)
* [单节点部署gpmall商城系统](http://www.voycn.com/article/danjiedianbushugpmallshangchengxitong)
* [kali下docker的安装](http://www.voycn.com/article/kalixiadockerdeanzhuang)
* [经典利用永恒之蓝漏洞对Windows操作系统进行攻击](http://www.voycn.com/article/jingdianliyongyonghengzhilanloudongduiwindowscaozuoxitongjinxinggongji)
* [BGP-边际网关路由协议简记](http://www.voycn.com/article/bgp-bianjiwangguanluyouxieyijianji)
* [Linux Centos7 gitlab安装](http://www.voycn.com/article/linux-centos7-gitlabanzhuang)
* [VMware卡在命令行/dev/sda1 clean... 界面不动](http://www.voycn.com/article/vmwarekazaiminglingxingdevsda1-clean-jiemianbudong)
* [多图预警，Appium 实现手机自动化，搭配 mitmproxy 不就实现自动采集了吗？](http://www.voycn.com/article/duotuyujingappium-shixianshoujizidonghuadapei-mitmproxy-bujiushixianzidongcaijilema)
* [计算机网络必看之·你确定了解应用层吗？(下）](http://www.voycn.com/article/jisuanjiwangluobikanzhiniquedinglejieyingyongcengmaxia)
* [免责声明](http://www.voycn.com/disclaimer "免责声明")
* [联络表](http://www.voycn.com/contact)
* [科文园](http://www.stnkw.com/)

Copyright © 2021. All rights reserved