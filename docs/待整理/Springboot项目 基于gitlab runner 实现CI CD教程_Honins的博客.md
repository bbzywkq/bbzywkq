# Springboot项目 基于gitlab runner 实现CI/CD教程\_Honins的博客
# Java项目 CI/CD的实现教程
## CI 是什么？CI 和 CD 有什么区别？
缩略词 CI / CD 具有几个不同的含义。CI/CD 中的“CI”始终指持续集成，它属于开发人员的自动化流程。成功的 CI 意味着应用代码的新更改会定期构建、测试并合并到共享存储库中。该解决方案可以解决在一次开发中有太多应用分支，从而导致相互冲突的问题。

CI/CD 中的“CD”指的是持续交付和/或持续部署，这些相关概念有时会交叉使用。两者都事关管道后续阶段的自动化，但它们有时也会单独使用，用于说明自动化程度。

持续\_交付\_通常是指开发人员对应用的更改会自动进行错误测试并上传到存储库（如 [GitHub](https://redhatofficial.github.io/#!/main) 或容器注册表），然后由运维团队将其部署到实时生产环境中。这旨在解决开发和运维团队之间可见性及沟通较差的问题。因此，持续交付的目的就是确保尽可能减少部署新代码时所需的工作量。

持续\_部署\_（另一种“CD”）指的是自动将开发人员的更改从存储库发布到生产环境，以供客户使用。它主要为了解决因手动流程降低应用交付速度，从而使运维团队超负荷的问题。持续部署以持续交付的优势为根基，实现了管道后续阶段的自动化。

![image](https://file.bbzy.online/blog/0976542b43ef7844e921c22cf3063373.png)

CI/CD 既可能仅指持续集成和持续交付构成的关联环节，也可以指持续集成、持续交付和持续部署这三项构成的关联环节。更为复杂的是，有时“持续交付”也包含了持续部署流程。

归根结底，我们没必要纠结于这些语义，您只需记得 CI/CD 其实就是一个流程（通常形象地表述为管道），用于实现应用开发中的高度持续自动化和持续监控。因案例而异，该术语的具体含义取决于 CI/CD 管道的自动化程度。许多企业最开始先添加 CI，然后逐步实现交付和部署的自动化（例如作为[云原生应用](https://www.redhat.com/zh/topics/cloud-native-apps)的一部分）。

来自于RadHat:https://www.redhat.com/zh/topics/devops/what-is-ci-cd，更多内容可查看此文档。

以一言概之的话我想应该是：机械的事情让机器做。一个开发团队，没有CI/CD，可能是这样子的：无法管理代码多人多地协作（git repository也是CI的一部分），系列的shell需要人工处理，代码的发布需要登录服务器等等；相反，拥有CI/CD，这些事情都交给机器去完成，减少人工操作出错的概率，腾出的碎片时间还可以去做更有意义的事情。

### 理想的CI/CD开发流应该是怎样的？
我认为理想的CI/CD开发流应该包含三个阶段：`build`、`deploy`和`notify`。build阶段专注做代码构建与单元测试，deploy阶段专注做test/gray/prod环境的代码部署，notify阶段专注做上线通知，如下图;

![image](https://file.bbzy.online/blog/f7cfbcfa77326a7a100af662f74e8763.png)

以下内容围绕build和deploy两个阶段完成从**0到1的部署**。**（不包括合并分支，以医易网 app端为例）**

## 1\. Gitlab-Runner安装并注册
我这里使用的是Gitlab-Runner，文档：https://docs.gitlab.com/runner/

## 2\. 免密登陆
### 为什么需要免密登录？
* 构建产出的dist文件要传输到目标服务器（测试机/生成机），要么基于http网络协议、要么基于ssh协议（或其他文件传输协议？）
* 基于http需要写文件接收接口，这里直接使用基于ssh传输文件的`rsync`，简单、安全！
* runner内定义的一系列script是在一个docker容器内执行的，无法人工干预，那么登录服务器就要做成免密。

先在本机（注册runner所在的机器）配一遍免密登录服务器的流程：

### 生成一对公私钥
使用rsa作为非对称加密方式：

```Plain Text
ssh-keygen
1
```
**说明**：命令会在`~/.ssh`目录下生产公钥私钥

### 定义ssh config内容
在\~/.ssh/config文件写入以下内容（文件不存在直接创建）：

```Plain Text
Host any_name
  HostName server_ip
  User user
  IdentityFile ~/.ssh/id_rsa
1234
```
多个Host可以这么写：

```Plain Text
Host lyg-dev
    Port 22
    HostName ip
    User root
    IdentityFile ~/.ssh/id_rsa

Host project-dev
    Port 22
      HostName ip 
      User root
      IdentityFile ~/.ssh/id_rsa

123456789101112
```
**说明**：定义ssh的config文件是为了快捷访问，就像你配置host一样，没有hostname，你只能访问ip。配置后你就可以通过 `ssh any_name` 登录服务器了。当然，不出意外，会要求你输入服务器的登录密码。

### 免密登录
免密登录的精髓就是：把本机的公钥存储到目标服务器的authorized\_keys文件内（该文件服务器上不存在可以直接创建。）

```Plain Text
ssh-copy-id -i ~/.ssh/id_rsa.pub username@ip
1
```
**特别地**：如果你的端口不是默认的22端口，则加上端口号 `-p PORT`

### 验证登录
```Plain Text
ssh any_name
1
```
不出意外，你应该可以直接登录服务器了。那么，我们回到gitlab的配置上

## 3.gitlab上定义ssh配置信息
我们进入gitlab页面位置：Settings >> CI/CD >> Environment variables下定义 `.gitlab.yml` 上出现的几个变量：

![image](https://file.bbzy.online/blog/dbcce0ea4be7e1498f815886d1ef6247.png)

* `SSH_PRIVATE_KEY`：把本机（runner所在机器）的私钥复制过来：\~/.ssh/id\_rsa
* `SSH_CONFIG`：把刚才ssh config定义的信息复制过来：\~/.ssh/config
* SSH\_KNOWN\_HOST\`：定义这个变量是为了让ssh对服务器进行身份确认（不然会被ssh认为是一个不被信任的环境），变量值使用以下命令生成：

```Plain Text
ssh-keyscan -p PORT IP
1
```
然后打开`~/.ssh/known_hosts`，将次ip对应的内容存至SSH\_KNOWN\_HOST

![image](https://file.bbzy.online/blog/f39e0e26c71056fefa12a9e939e6c11c.png)

`SSH_USER` `SSH_HOST_DEV` 这两个值可选。

## 4\. 使用rsync传输应用文件
```Plain Text
rsync -rve ssh target/app.jar root@project-dev:/project/code/project/app/app
1
```
**说明**：`project-dev`就是在`ssh config`定义的`Host`值。

## 5\. 启动项目
以下命令用于测试环境，正式医易网环境需要判断旧版本项目和端口等，较复杂，暂时不写。

使用SSH远程连接服务器，进入相应目录，然后执行`shutdown.sh`和`startup-jar.sh`。注意是startup-jar

```Plain Text
    ssh -o StrictHostKeyChecking=no -T project-dev "cd /project/code/project/ && sh shutdown.sh app"
    ssh -o StrictHostKeyChecking=no -T project-dev "source /etc/profile && cd /project/code/project/ && sh startup-jar.sh app"
12
```
## 完整的ci脚本（以doctor端为例）
```Plain Text
image: java:8

stages:
  - package
  - build

services:
  - docker:dind

#目前只需要jar包这个资产，依赖在宿主机上，不需要这个cache
#cache:
# key: push-maven
# paths:
#   - /root/.m2/
#   - target/*.jar

maven-package:
  image: maven:3.6.3-jdk-8
  stage: package
  script:
    - echo "===============目录结构  ===============" `ls`
    - echo "=============== 开始编译源码，包含单元测试，在target目录生成jar文件 ==============="
    - mvn clean install
    - echo "target文件夹" `ls target/`
  artifacts:
    paths:
      - target/*.jar

build-deploy-docker-dev:
  image: docker:latest
  stage: build
  environment: dev
  only:
    - master
  before_script:
    - echo "=============== 测试环境 ==============="
    - echo "=====换阿里镜像源====="
    - sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
    - echo "=====安装 ssh====="
    - which ssh-agent || ( apk update && apk --no-cache add openssh-client )
    - echo "=====配置 ssh 文件====="
    - mkdir -p ~/.ssh
    - cp ${SSH_PRIVATE_KEY}  ~/.ssh/id_rsa
    - chmod 700 ~/.ssh/id_rsa
    - cp ${SSH_CONFIG}  ~/.ssh/config
    - cat /etc/*-release
    - echo "=====安装 rsync====="
    - command -v rsync || (apk update && apk --no-cache add rsync)
  script:
    - echo "===== 从缓存中恢复的target文件夹 ====="
    - ls target/
    - echo "===== 替换文件名，方便后续发布 ====="
    - mv target/app*.jar target/app.jar
    - ssh -o StrictHostKeyChecking=no -T project-dev "cd /project/code/project/ && sh shutdown.sh app"
    - rsync -rve ssh target/app.jar root@project-dev:/project/code/project/app/app
    - ssh -o StrictHostKeyChecking=no -T project-dev "source /etc/profile && cd /project/code/project/ && sh startup-jar.sh app"

build-deploy-docker-pro:
  image: docker:latest
  stage: build
  environment: work
  only:
    - release
  script:
    - echo ""=============== 生产环境 "==============="
    - echo "从缓存中恢复的target文件夹" `ls target/`
    - echo "todo ..."

1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768
```
## 遇到的问题
### 使用ssh连接启动项目报错 mnv: 未找到命令
在这篇文章里得到了解答：https://blog.csdn.net/nklinsirui/article/details/104673286/?utm\_medium=distribute.pc\_relevant.none-task-blog-baidujs\_title-1&spm=1001.2101.3001.4242

文末给出了2种解决办法，用方法二方便点，于是执行命令可以写成

```Plain Text
ssh -o StrictHostKeyChecking=no -T project-dev "source /etc/profile && cd /project/code/project/ && bash startup.sh app"
1
```
### rsync 命令未定义
这个问题的原因是：我们的gitlab-runner使用的系统是alpine linux，是一个非常精简版的linux系统，没有安装rsync工具，需要手动安装。

```Plain Text
apk update && apk --no-cache add rsync
1
```
又由于网络原因，直接安装失败，先需要更换镜像源，可以使用阿里源

```Plain Text
sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
1
```
### rsync报错 code 255
ssh验证失败。网上也有人遇到这个问题：https://bobcares.com/blog/rsync-error-code-255/

但是按照文中说的方法，仍然报这个错误。

我尝试替换命令顺序，把ssh连接放到前面，然后运行rsync，可正常执行。