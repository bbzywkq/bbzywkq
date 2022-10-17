# Docker安装Gitlab-runner 
```Plain Text
# 拉取镜像
docker pull gitlab/gitlab-runner:latest

# 创建挂载目录
mkdir -p /opt/gitlab-runner/config

# 启动容器
docker run -d --name gitlab-runner --restart always -v /opt/gitlab-runner/config:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest

```
进入runner容器，注册到gitlab上

汇总操作命令：

```Plain Text
docker exec -it gitlab-runner  gitlab-runner register -n \
  --url http://192.168.0.253:8090 \
  --registration-token tyXBwC8frbShS4yn3nE5 \ # token需要根据实际情况进行修改
  --tag-list=dockersock,docker \
  --description "dockersock" \
  --docker-privileged=true \
  --docker-pull-policy="if-not-present" \
  --docker-image "docker:latest" \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock \
  --docker-volumes /root/m2:/root/.m2 \
  --executor docker 

```
分步操作命令：

```Plain Text
# 进入容器
docker exec -it gitlab-runner /bin/bash

# 运行以下注册命令
gitlab-runner register

# 输入Gitlab实例的地址
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
http://192.168.0.253:8090  # 端口采用默认的80，否则需要加上端口，比如 http://192.168.0.253:8090

# 输入token
Please enter the gitlab-ci token for this runner
tyXBwC8frbShS4yn3nE5

```
如何获取token
进入到项目中的设置，找到CI/CD，Runner ，图片这个token仅供途径展示

![image](images/794174-20201014162037964-1798013442.png)

```Plain Text
# 输入Runner的描述，后期可以手动修改
Please enter the gitlab-ci description for this runner
[hostname] my-runner

# 输入与Runner关联的标签，后期可以手动修改
Please enter the gitlab-ci tags for this runner (comma separated):
my-tag

# 输入Ruuner的执行者
Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:
docker

# 如果上面执行者为docker，需要你在后续项目根部的.gitlab-ci.yml中指定docker版本
Please enter the Docker image (eg. ruby:2.1):
alpine:latest

```
通过以上命令后，就可以在gitlab中查看到了这个刚刚创建的runner

![image](images/794174-20201014162236794-1553131186.png)

runner注册完毕之后，还需要修改一下runner的配置文件，实现runner与宿主机的数据挂载:

```Plain Text
vim /opt/gitlab-runner/config/config.toml # 开头创建的宿主机挂载目录

concurrent = 1
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "my-runner"
  url = "http://192.168.0.253:8090"
  token = "tyXBwC8frbShS4yn3nE5"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    tls_verify = false
    image = "alpine:latest"
    privileged = false
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache","/var/run/docker.sock:/var/run/docker.sock"]
    shm_size = 0

```
原先是volumes = \["/cache"\]上面的volumes数组中添加docker的挂载，加快项目的构建速度。

最后，只需要再重启runner容器即可:

```Plain Text
docker restart gitlab-runner

```
说明：
1.不同的项目可以使用不同的gitlab-runner，根据实际情况再运行一个名称不一样的容器，并根据新项目的token注册就行了。
2.不同的项目还可以使用同一个gitlab-runner，只需要在注册的时候使用不同项目下的token就行了。