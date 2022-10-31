# 汇总

## Linux

### 安装字体包

```
cd /usr/share/fonts/
mkdir <name>
刷新缓存
mkfontscale
fc-cache -fv
```

### 根据文件前缀删除

```
find ./ -name '<prefix>*' -exec rm {} \;
```

### du/df文件命令

**显示当前目录下所有一级子目录的大小：**

```
du -h --max-depth=1
```

**显示当前目录的总大小：**

```
du -sh
```

**显示当前目录下所有子目录的大小，递进到最大深度：**

```
du -h
```

**df -h** 命令查看整体磁盘使用情况

使用 **du -ah --max-depth=1**  /    可以查看根目录下各个文件占用情况

**du -h –max-depth=1 /var/log/\*** 查看/var/log路径下文件的大小

**du -sh /\*** 查看哪个目录最大，一步一步的查找大文件

 **du -bsh /\*\*\*/** 命令 查看某个目录

用find 命令找到当前目录大于500M文件   **find . -size +500M** 

查找跟目录下大于10M的文件 **find / -type f -size +10000000c -exec du -sh {} \\;**

#### **du**常用的选项：

​       -h：以人类可读的方式显示
　　-a：显示目录占用的磁盘空间大小，还要显示其下目录和文件占用磁盘空间的大小
　　-s：显示目录占用的磁盘空间大小，不要显示其下子目录和文件占用的磁盘空间大小
　　-c：显示几个目录或文件占用的磁盘空间大小，还要统计它们的总和
　　--apparent-size：显示目录或文件自身的大小
　　-l ：统计硬链接占用磁盘空间的大小
　　-L：统计符号链接所指向的文件占用的磁盘空间大小

**du -sh** : 查看当前目录总共占的容量。而不单独列出各子项占用的容量 

**du -lh --max-depth=1** : 查看当前目录下一级子文件和子目录占用的磁盘容量。

**lsof -n | grep deleted**  (查看删除占用)

### scp

对拷文件夹 (包括文件夹本身)

```
scp -r   /home/wwwroot/www/charts/util root@192.168.1.65:/home/wwwroot/limesurvey_back/scp
```

对拷文件夹下所有文件 (不包括文件夹本身)

```
scp   /home/wwwroot/www/charts/util/* root@192.168.1.65:/home/wwwroot/limesurvey_back/scp
```

对拷文件并重命名

```
scp   /home/wwwroot/www/charts/util/a.txt root@192.168.1.65:/home/wwwroot/limesurvey_back/scp/b.text
```

把本地 /var/log/sql-slow-queries.log 这个文件copy到1.50上面/root 目录下面

```
scp /var/log/sql-slow-queries.log root@192.168.1.50:/root
```

一、将本机文件复制到远程服务器上
　　#scp /home/administrator/news.txt [root@192.168.6.129](mailto:root@192.168.6.129):/etc/squid
　　/home/administrator/ 本地文件的绝对路径
　　news.txt 要复制到服务器上的本地文件
　　root 通过root用户登录到远程服务器（也可以使用其他拥有同等权限的用户）
　　192.168.6.129 远程服务器的ip地址（也可以使用域名或机器名）
　　/etc/squid 将本地文件复制到位于远程服务器上的路径
二、将远程服务器上的文件复制到本机
　　#scp [remote@www.abc.com](mailto:remote@www.abc.com):/usr/local/sin.sh /home/administrator
　　remote 通过remote用户登录到远程服务器（也可以使用其他拥有同等权限的用户）
　　[www.abc.com](http://www.abc.com/) 远程服务器的域名（当然也可以使用该服务器ip地址）
　　/usr/local/sin.sh 欲复制到本机的位于远程服务器上的文件
　　/home/administrator 将远程文件复制到本地的绝对路径
注意两点：
　　1.如果远程服务器防火墙有特殊限制，scp便要走特殊端口，具体用什么端口视情况而定，命令格式如下：
　　#scp -p 4588 [remote@www.abc.com](mailto:remote@www.abc.com):/usr/local/sin.sh /home/administrator
　　2.使用scp要注意所使用的用户是否具有可读取远程服务器相应文件的权限。
　　如：

## git

### docker容器化部署

```
docker run -d --name gitlab2 --restart always \
    -p 19443:443 -p 19080:80 -p 19022:22 \
    -v /path/to/conf:/etc/gitlab \
    -v /path/to/logs:/var/log/gitlab \
    -v /path/to/data:/var/opt/gitlab \
    033bcfa1b036
```



### gitlab备份恢复迁移

#### 备份

```
#生成备份文件：默认地址：/var/opt/gitlab/backups/
gitlab-rake gitlab:backup:create
复制文件到宿主机下
```

#### 恢复

将备份文件权限修改为777，避免出现权限不够的问题

```
cd /var/opt/gitlab/backups
rm rf tmp/ #删除无用临时文件
chomd 777 <name>_gitlab_backup.tar
```

停止数据连接服务

```
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
```

恢复备份文件到GitLab

```
gitlab-rake gitlab:backup:restore BACKUP=备份文件编号
例如：备份文件名为`1561597102_2019_06_27_12.0.1_gitlab_backup.tar`，则编号为`1561597102_2019_06_27_12.0.1`。
```

启动GitLab

```
gitlab-ctl start
```

查新旧GitLab的内容

### gitlab迁移500问题

备份命令时不知道需要备份以下三个文件，而后导致了一系列的问题。截至11.11-ee，这个问题依然存在

```
/etc/gitlab/gitlab-secrets.json
/etc/gitlab/gitlab.rb
/home/git/gitlab/config/secrets.yml 
```

**解决办法** 重置相关CI的所有密钥和token

```
gitlab-rails dbconsole
gitlabhq_production=> UPDATE projects SET runners_token = null, runners_token_encrypted = null;
UPDATE 88
gitlabhq_production=> UPDATE namespaces SET runners_token = null, runners_token_encrypted = null;
UPDATE 37
gitlabhq_production=> UPDATE application_settings SET runners_registration_token_encrypted = null;
UPDATE 6
```



### git配置代理

更改用户主目录.gitconfig文件

```
[http]
        proxy = socks5://127.0.0.1:1080
[https]
        proxy = socks5://127.0.0.1:1080
```

### git合并忽略

创建自定义merge driver

```
git config --global merge.ours.driver true
```

在要被merge的分支上创建.gitattributes文件,并且在文件中置顶不merge的文件名

```
echo 'index.php merge=ours' >> .gitattributes
git add .gitattributes
git commit -m 'chore: Preserve index.php during merges' //只是为了commit代码，可以
```

在项目根目录下新建文件.gitattributes，然后文件中写入需要忽略的文件名

```
merge=ours, 一个文件占一行 例：
忽略config.xml 文件
config.xml merge=ours
```

### git远程仓库地址更改

查看当前的远程关联的仓库  **git remote -v**

配置新的远程仓库地址 `git remote set-url origin {git url}`

确认  `git remote -v`

### git fork

```
# 检测惯量的仓库
git remote -v

# 添加上游仓库地址
git remote add upstream https://github.com/Nepxion/Discovery.git

# 再次检测惯量
git remote -v

# 检测状态
git status

# 拉去上游代码
git pull upstream info
```

### git 分支操作

创建及切换分支

```
git chekcout -b dev
```

```
git push origin dev:dev
```

删除本地的bug\_xzx分支

```
git branch -d bug_xzx
```

删除远程的bug\_xzx分支

```
git push origin --delete bug_xzx
```

拉去远程分支

```
git fetch origin dev（dev为远程仓库的分支名）
git checkout -b dev(本地分支名称) origin/dev(远程分支名称)
git pull origin dev(远程分支名称)
```



### gitlab-runner

#### docker容器化部署和使用

```
# 拉取镜像
docker pull gitlab/gitlab-runner:latest

# 创建挂载目录
mkdir -p /opt/gitlab-runner/config

# 启动容器
docker run -d --name gitlab-runner --restart always -v /opt/gitlab-runner/config:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest
```

**进入runner容器，注册到gitlab上**

**汇总操作命令：**

```
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

**分步操作命令：**

```
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

**如何获取token**

进入到项目中的设置，找到CI/CD，Runner ，图片这个token仅供途径展示

![image](https://file.bbzy.online/blog/794174-20201014162037964-1798013442.png)

```
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

**通过以上命令后，就可以在gitlab中查看到了这个刚刚创建的runner**

![image](https://file.bbzy.online/blog/794174-20201014162236794-1553131186.png)







**runner注册完毕之后，还需要修改一下runner的配置文件，实现runner与宿主机的数据挂载:**

```
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

docker restart gitlab-runner

**说明：**
1.不同的项目可以使用不同的gitlab-runner，根据实际情况再运行一个名称不一样的容器，并根据新项目的token注册就行了。
2.不同的项目还可以使用同一个gitlab-runner，只需要在注册的时候使用不同项目下的token就行了。

## mysql

### 安装

#### apt方式

```
sudo apt-get install mysql-server
sudo apt install mysql-client
```

#### docker

```
docker run  -d --name mysql8081 
-p 8081:3306 -e MYSQL_ROOT_PASSWORD=123456  
-v v8081_data:/var/lib/mysql 
-v v8081_conf:/etc/mysql  mysql:5.7.26
```

### 开启sql日志

```
#查看状态
#show variables like '%general%';
#开启日志
#SET GLOBAL general_log = 'On';
#指定日志文件
#SET GLOBAL general_log_file = '/var/lib/mysql/mysql.log';
```

### 配置数据库进度只读状态

**注：对超级权限无效**

```
mysql> set global read_only=1;
```

### 配置慢sql监控

查看系统变量控制

```
show variables like ‘%query%’;
```

**变量解释**

1.slow_query_log
该配置项是决定是否开启慢日志查询功能，配置的值有ON或者OFF.
2.slow_query_log_file
该配置项是慢日志查询的记录文件,需要手动创建.
3.long_query_time
该配置项是设置慢日志查询的时间阈值，当超过这个阈值时，慢日志才会被记录.配置的值有0(任何的sql语句都记录下来)，或者>0(具体的阈值).该配置项是以秒为单位的，并且可以设置为小数.
4.log-queries-not-using-indexes
该配置项是为了记录未使用到索引的sql语句.

**配置慢日志查询**

```
set global slow_query_log=ON;
set global slow_query_log=OFF;
set global long_query_time=1;
```

### 同步机制说明

1. **全同步复制**

   指当主库执行完一个事务，所有的从库都执行了该事务才返回给客户端。因为需要等待所有从库执行完该事务才能返回，所以全同步复制的性能必然会收到严重的影响。

   当主库提交事务之后，所有的从库节点必须收到，APPLY并且提交这些事务，然后主库线程才能继续做后续操作。这里面有一个很明显的缺点就是，主库完成一个事务的时间被拉长，性能降低。

2. **半同步复制**

   介于异步复制和全同步复制之间，主库在执行完客户端提交的事务后不是立刻返回给客户端，而是等待至少一个从库接收到并写到relay log中才返回给客户端。相对于异步复制，半同步复制提高了数据的安全性，同时它也造成了一定程度的延迟，这个延迟最少是一个TCP/IP往返的时间。所以，半同步复制最好在低延时的网络中使用。

   是介于全同步复制和异步复制之间的一种，主库只需要等待至少一个从库节点收到并且Flush Binlog到Relay Log文件即可，主库不需要等待所有从库给主库反馈。同时，这里只是一个收到的反馈，而不是已经完全执行并且提交的反馈，这样就节省了很多时间。

3. **异步复制**

   MySQL默认的复制即是异步的，主库在执行完客户端提交的事务后会立即将结果返给给客户端，并不关心从库是否已经接收并处理，这样就会有一个问题，主如果crash掉了，此时主上已经提交的事务可能并没有传到从上，如果此时，强行将从提升为主，可能导致新主上的数据不完整

   主库将事务Binlog事件写入到Binlog文件中，此时主库只会通知一下Dump线程发送这些新的Binlog，然后主库就会继续处理提交操作，而此时不会保证这些Binlog传到任何一个从库节点上。

### 权限配置

1. **配置root用户可以远程任意访问**

   ```
   GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '132456' WITH GRANT OPTION;
   ```

   刷新配置

   ```
   flush privileges;
   ```

   退出 exit

   重启MySQL服务，否则远程连接可能配置无效 service mysql restart

2. **修改密码**

   ```
   修改系统用户密码
   set password for root@localhost = password('123');
   ```

   ```
   修改远程用户密码
   set password for root = password('123');//修改远程用户无刷新权限
   ```

   必须指令：**flush privileges**; 刷新权限

   退出：quit/exit

3. **添加用户**

   添加用户 grant 权限 on 数据库.\* to ‘用户名’@‘允许登录的主机<%表示允许所有主机>‘ identified by ’设置密码’
   添加用户拥有salon\_test\_copy数据库访问权限：

   ```
   grant select,insert,update,delete on shouxin_pfc.* to 'rootdev'@'%' identified by 'devpass';
   ```

   全选选择：

   ```
   select,insert,update,delete
   all privileges 所有权限
   ```

   


### 数据备份及导入

#### 备份

   **备份数据库所有数据**

   ```
   mysqldump -uroot -pwkq4978dmm salonv2_official >/home/<name>.sql
   ```

   **Mysqldump常用命令：**

   ```
   mysqldump -u用户名 -p密码 --databases 数据库1 数据库2 > xxx.sql
   ```

   -u: 用户名

   -p: 密码

   -P: 端口号，不写默认3306–all-databases,

    -A：备份所有数据库–databases,
    
    -B: 用于备份多个数据库，如果没有该选项，mysqldump把第一个名字参数作为数据库名，后面的作为表名。使用该选项，mysqldum把每个名字都当作为数据库名。

   -d: 只导出数据库的表结构-t: 只导出数据库的数据

   –quick, -q：快速导出

   –xml, -X：导出为xml文件

   **备份全部数据库的数据和结构**

   ```
   mysqldump -uroot -p123456 -A > 0101.sql
   ```

   **备份全部数据库的结构**

   ```
   mysqldump -uroot -p123456 -P3306 -A -d > 0102.sql
   ```

   **备份全部数据库的数据**

   ```
   mysqldump -uroot -p123456 -P3306 -A -t > 0103.sql
   ```

   **备份单个数据库的数据和结构（sakila 为数据库名）**

   ```
   mysqldump -uroot -p123456 -P3306 sakila > 0104.sql
   ```

   **备份单个数据库结构（sakila 为数据库名，-d）**

   ```
   mysqldump -uroot -p123456 -P3306 sakila -d > 0105.sql
   ```

   **备份多个表的结构和数据 (table1,table2为表名)**

   ```
   mysqldump -uroot -p123456 -P3306 sakila table1 table2 > 0107.sql
   ```

   **一次备份多个数据库**

   ```
   mysqldump -uroot -p123456 --databases db1 db2 > 0108.sql
   ```

####    导入

1. 方式一，系统命令行

   ```
   mysqladmin -uroot -p123456 create db_name
   mysql -uroot -p123456 db_name < d:\bak\0101.sql
   ```

注：在导入备份数据库前，db\_name如果没有，是需要创建的； 而且与backup20110527.sql中数据库名是一样的才可以导入。

2. 方式二，source方法

   ```
   mysql > use db
   mysql > source d:\bak\0101.sql
   ```

### 数据库性能测试

mysql 性能测试 sysbench

### 锁定和解锁

特别注意，退出终端口会解锁

```
mysql>LOCK TABLES tbl_name READ;

为表增加一个写锁定：

mysql>LOCK TABLES tbl_name WRITE;
```

Flush tables with read lock;

解锁:UNLOCK TABLES;

### 修改最大连接数

```
mysql> show variables like ‘%max\_connections%’;
set global max_connections=200
```

**持久化**

进入制MySQL安装目录 打开MySQL配置文件 my.ini 或 my.cnf查找 max_connections=100 修改为 max_connections=1000 服务里重起MySQL即可。


## maven

### 阿里云镜像库

```
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>https://maven.aliyun.com/repository/public </url>
</mirror>
```

### nexus3仓库类型说明

```
# maven-central
maven中心库 或配置的maven镜像库 如(阿里云)
# maven-public 组库
可配置合并某些库
# maven-releases
正式发布存储库-库文件一般不允许覆盖
# maven-snapshots
开发或者预发布库-库文件一般允许覆盖
```

### 配置本地maven使用私有库

#### 1.开启了匿名访问

```
<mirror>
        <id>anonymous</id>
        <mirrorOf>*</mirrorOf>
        <name>Administrator User</name>
        <url>http://192.168.1.107:8081/repository/maven-public/</url>
</mirror>
```

#### 2.未开启匿名访问并且禁用掉了anonymous用户

![image](https://file.bbzy.online/blog/zyft_Hx_LsOGqLFdxbm3dYyUpvmODQcIm1fY8KqxnIk.png)

```
<server>
    <id>admin</id>
    <username>admin</username>
    <password>wkq4978dmm</password>
</server>
```

```
<mirror>
    <id>admin</id>
    <mirrorOf>*</mirrorOf>
    <name>admin</name>
    <url>http://maven.medicalsj.com/repository/maven-public/</url>
</mirror>
```

### nexus3使用阿里云镜像

![image](https://file.bbzy.online/blog/gDkVp3nuxzGuXV4RY0eTERZ7h--uSMBAWm-xkXJIzRY.png)

```
http://maven.aliyun.com/nexus/content/repositories/central/
```

### nexus3用户权限说明

Roles:添加角色，设置每个角色可看到的页面或者仓库，每个角色也可拥有其他的角色
Users:添加帐号密码，帐号密码邮箱这些必填信息不说了，这里要选择一个角色
Anonymous：这个打开后对钩取消掉就代表未登录不可访问仓库

给角色赋予权限

add:上传jar包权限

browse:浏览权限

delete:删除

edit:编辑

read:读取jar包详细信息

找到对应的权限添加到右边即可，权限全部添加，添加第一条 \* 的即可

当然，其他的仓库也可按照上述方式搜索添加

用户可以自己修改密码，但光添加上面的权限是无法修改的，需搜索：userschengepw,把这个权限给到。

### 上传jar至私服nexus3

1. **添加账号**

   修改 seting.xmlz中 servers节点 添加授权的账号

   ```
   <server>
       <id>admin</id>
       <username>admin</username>
       <password>wkq4978dmm</password>
   </server>
   # 可添加多个
   ```

2. **项目环境pom文件添加节点**

   ```
   <distributionManagement>
           <repository>
               <id>admin</id>
               <url>http://maven.medicalsj.com/repository/maven-releases/</url>
           </repository>
           <snapshotRepository>
               <id>admin</id>
               <url>http://maven.medicalsj.com/repository/maven-snapshots/</url>
           </snapshotRepository>
   </distributionManagement>
   # 此处的id 对象seting.xml中server 节点中的id
   ```

   ![image](https://file.bbzy.online/blog/p-ZDEZwrTqrtjNZCQaCd0nB6kmoKMhwIammq5la1YtM.png)

3. **打开nexus3后台验证**

   ![image](https://file.bbzy.online/blog/qSM9UhKl5phxNZvc4lKXFFDg-PQkm_juxVqYZX6q3AA.png)

### 打包命令

```
package命令完成了项目编译、单元测试、打包功能，但没有把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库

install命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库，但没有布署到远程maven私服仓库

deploy命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库
```



```
mvn clean install   -T 1C -Dmaven.test.skip=true -Dmaven.compile.fork=true -U -pl  子项目名称 -am (am打入相关依赖包)
多模块工程的打包命令参考：
```

-am --also-make 同时构建所列模块的依赖模块；
-amd -also-make-dependents 同时构建依赖于所列模块的模块；
-pl --projects  构建制定的模块，模块间用逗号分隔；
-rf -resume-from  从指定的模块恢复反应堆。

-am,--also-make If project list is specified, also build projects required by the list

-amd,--also-make-dependents If project list is specified, also build projects that depend on projects on the list

-pl,--projects  Comma-delimited list of specified reactor projects to build instead of all projects. A project can be specified by [groupId]:artifactId or by its relative path.

-rf,--resume-from  Resume reactor from specified project



### nexus3使用

**项目使用nexus私服的jar包，在项目的pom.xml文件中指定私服仓库**

```
<repositories>
    <repository>
        <id>nexus</id>
        <name>nexus</name>
        <url>http://192.168.1.103:8081/nexus/content/groups/public/</url>
        <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
    </repository>
</repositories>
```

**项目使用nexus私服的插件，在项目的pom.xml文件中指定插件仓库**

```
<pluginRepositories>
    <pluginRepository>
        <id>nexus</id>
        <name>nexus</name>
        <url>http://192.168.1.103:8081/nexus/content/groups/public/</url>
        <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
    </pluginRepository>
</pluginRepositories>
```

**如果想本机所有的maven项目都使用私服的组件，可以在maven的设置文件settings.xml中添加属性，并激活**

```
<profiles>
    <profile>
        <id>nexusProfile</id>
        <repositories>
            <repository>
                <id>nexus</id>
                <name>nexus</name>
                <url>http://192.168.1.103:8081/nexus/content/groups/public/</url>
                <releases>
                    <enabled>true</enabled>
                </releases>
                <snapshots>
                    <enabled>true</enabled>
                </snapshots>
            </repository>
        </repositories>
    </profile>
</profiles>
<!-- 激活 -->
<activeProfiles>
    <activeProfile>nexusProfile</activeProfile>
</activeProfiles>
```

**项目发布到私服，maven项目使用命令：mvn clean deploy；需要在pom文件中配置一下代码；**

```
<distributionManagement>
        <repository>
            <id>user-release</id>
            <name>User Project Release</name>
            <url>http://192.168.1.103:8081/nexus/content/repositories/releases/</url>
        </repository>

        <snapshotRepository>
            <id>user-snapshots</id>
            <name>User Project SNAPSHOTS</name>
            <url>http://192.168.1.103:8081/nexus/content/repositories/snapshots/</url>
        </snapshotRepository>
    </distributionManagement>
```

**注意还需要配置mvn发布的权限，否则会报401错误，在settings.xml中配置权限，其中id要与pom文件中的id一致**

```
<server>
    <id>user-release</id>
    <username>admin</username>
    <password>admin123</password>
</server>
<server>
    <id>user-snapshots</id>
    <username>admin</username>
    <password>admin123</password>
</server>
```

**上传第三方的jar包，选择3rd party–>Artifact Upload–> 选择GAV方式–>填好构建参数–>增加jar包–>上传，在Browse Storeage查看**

## docker

### docker容器网络模式

```
–net选项指定容器的网络模式
```

#### host模式

Docker使用的网络实际上和宿主机一样，在容器内看到的网卡ip是宿主机上的ip

众所周知，Docker使用了Linux的Namespaces技术来进行资源隔离，如PID Namespace隔离进程，Mount Namespace隔离文件系统，Network Namespace隔离网络等。一个Network Namespace提供了一份独立的网络环境，包括网卡、路由、Iptable规则等都与其他的Network Namespace隔离。一个Docker容器一般会分配一个独立的Network Namespace。但如果启动容器的时候使用host模式，那么这个容器将不会获得一个独立的Network Namespace，而是和宿主机共用一个Network Namespace。容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口。

#### container模式

多个容器使用共同的网络看到的ip是一样的

在理解了host模式后，这个模式也就好理解了。这个模式指定新创建的容器和已经存在的一个容器共享一个Network Namespace，而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。两个容器的进程可以通过lo网卡设备通信。

#### none模式

这种模式下不会配置任何网络。

这个模式和前两个不同。在这种模式下，Docker容器拥有自己的Network Namespace，但是，并不为Docker容器进行任何网络配置。也就是说，这个Docker容器没有网卡、IP、路由等信息。需要我们自己为Docker容器添加网卡、配置IP等。

#### bridge模式

bridge模式是Docker默认的网络设置，此模式会为每一个容器分配Network Namespace、设置IP等，并将一个主机上的Docker容器连接到一个虚拟网桥上。

类似于Vmware的nat网络模式。同一个宿主机上的所有容器会在同一个网段下，相互之间是可以通信的。

### docker-compose

新建docker-compose.yml配置文件

```
version: '2'
services:
  tomcat:
    restart: always
    image: tomcat
    container_name: tomcat
    ports:
      - 30000:8080
```

**在配置同级目录下运行，或指定配置文件路径**

```
docker-compose -f /conf_path up -d  --后台守护启动
docker-compose -f /conf_path up  --前台启动
```

**查看日志**

```
docker-compose logs tomcat
```

**停止**

```
docker-compose start  --启动
docker-compose stop  --停止
docker-compose dowm  --停止并移除
```



### 启动命令

```
docker run --name container-name:tag -d -p service_port:docker_port image-name
```

**–name**

自定义容器名，不指定时，docker 会自动生成一个名称

**-d**

表示后台运行容器

**image-name**

指定运行的镜像名称以及 Tag

**-p**

表示进行服务器与 Docker 容器的端口映射，默认情况下容器中镜像占用的端口是 Docker 容器中的端口与外界是隔绝的，必须进行端口映射才能访问

### 基础命令

```
docker images--镜像列表
docker search--镜像搜索
docker pull--镜像下载
docker ps  查看正在运行的容器
docker ps -a 查看所有启动和未启动的容器
docker stop 停止容器
docker start  命令启动停止运行的容器，同理可以根据 容器名或者 容器 id 进行启动
```

### 删除容器or镜像

删除容器需要先停止

```
docker rm container-id --删除容器
docker rmi image_name --删除镜像
```

### 查看容器日志

```
docker logs <container-name>or<container-id >
```

### 查看容器ip

```
docker inspect <container-name>or<container-id >
```

### 查看镜像具体版本号

```
docker image inspect iamge_name | grep -i version
```

### 服务重启

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 进入容器

```
进入容器
docker exec -it <name or id> /bin/bash
或者
docker exec -it <name or id> /bin/sh
已root权限进入
docker exec -i -u root -t 容器名称 /bin/bash
exit：退出容器
```

### 代理配置

docker的架构下，docker 只是客户端， 管理，查看容器状态docker ps/run 与容器建立连接docker exec 都是后台dockerd来完成的

**客户端和服务端是单独的两个进程** https\_proxy docker pull 是不走代理的

**配置dockerd走代理模式**

/etc/docker/daemon.json 文件可以配置很多选项 **但唯独不能配置https\_proxy**

**过systemd service配置**

1.创建目录

```
sudo mkdir -p /etc/systemd/system/docker.service.d
```

2.创建文件

```
/etc/systemd/system/docker.service.d/http-proxy.conf
```

3.添加配置

```
[Service]
Environment="HTTPS_PROXY=http://<ip>:<port>"
```

**配置容器走代理**--配置容器内访问internet时，走代理

**第一种方式**：容器home目录添加配置文件

```
cat ~/.docker/config.json
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://127.0.0.1:3001",
     "httpsProxy": "http://127.0.0.1:3001",
     "noProxy": "*.test.example.com,.example2.com"
   }
 }
}
```

**第二种方式**：通过-e 传环境变量实现

### 配置镜像加速

修改`daemon`配置文件`/etc/docker/daemon.json`来使用加速器

加速镜像地址可从各云服务商(如：阿里云)处获取

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://3rupg4kz.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 宿主机/容器间文件复制

```
docker cp host_path containerID:container_path
```

```
docker cp containerID:container_path host_path
```

### 修改容器内部时区

```
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

```
echo Asia/Shanghai > /etc/timezone
```

### 运行容器内shell脚本

```
docker exec db_shouxin_test bash /home/dbrep.sh
```

### 重命名镜像

```
docker tag percona/percona-xtradb-cluster:latest pxc
```



## ElasticSearch

### docker容器化部署

#### 镜像

```
docker pull elasticsearch:7.3.0
```

```
docker run -d --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" elasticsearch:7.3.0
```

```
docker run --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" elasticsearch:7.3.0
```

```
docker run -d --name kibana --link=nervous_cohen:elasticsearch -p 5601:5601 kibana:7.3.0
```

#### 容器内目录

```
容器内目录
```

#### 重新挂在目录

```
docker volume create es_conf
docker volume create es_data
docker volume create es_plugins
```

#### 前台启动

```
docker run --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -e "discovery.type=single-node" -v es_conf:/usr/share/elasticsearch/config -v es_data:/usr/share/elasticsearch/data -v es_plugins:/usr/share/elasticsearch/plugins  elasticsearch:7.3.0
```

#### 跨域配置

```
cluster.name: "docker-cluster"
network.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: "*"

# minimum_master_nodes need to be explicitly set when bound on a public IP
# set to 1 to allow single node clusters
# Details: https://github.com/elastic/elasticsearch/pull/17288
discovery.zen.minimum_master_nodes: 1
```



### 可视化终端 

#### Dejavu [github](https://github.com/appbaseio/dejavu)

#### ElasticHD [github](https://github.com/qax-os/ElasticHD)

### 启用xpack安全验证

修改配置文件

```
xpack.security.enabled: true
##单个节点
discovery.type: single-node
```

初始化密码

```
./elasticsearch-setup-passwords interactive
```

### 清理索引

```
curl -u elastic -XDELETE http://127.0.0.1:9201/<index_name>*
curl  -XDELETE http://127.0.0.1:9201/<index_name>*
curl -u elastic:wkq1234..00 -XDELETE http://127.0.0.1:9200/<index_name>*
curl -u elastic:0n0RQ45Vdrb7oJo6 -XDELETE http://172.21.0.3:9200/<index_name>*
curl -u elastic:0n0RQ45Vdrb7oJo6 -XDELETE http://172.21.0.3:9200/<index_name>*
```

### 常用的索引动态配置参数

1. **index.number\_of\_replicas**

   每个主分片的副本数，默认为1。

2. **index.auto\_expand\_replicas**

   该配置项用于控制集群中副本的数量是否随集群中数据节点的数量进行扩展，默认值为false表示副本数不随数据节点扩展。如果希望扩展，可以将值设置为一个数值范围，如“0-3”表示集群中单个主分片的副本数在0个3个之间，具体情况根据集群中数据节点而定，也可以设置为“0-all”，all表示集群中所有的数据集点的数量。

   注：自动扩展的副本数不会考虑到其它对副本分配可能存在的限制规则，如对分片的识别、过滤或每个节点上总分片的限制，如果适用的规则阻止所有副本的分配置，这可能导致群集运行状况变为黄色。

3. **index.search.idle.after**

   设置分片多久没有接收过请求，就会被判定为空闲的时间，默认为30秒。

4. **index.refresh\_interval**

   执行刷新操作的频率，该操作使索引的最近更改对搜索可见， 默认为1秒， 可以设置为-1表示禁用刷新。

   如果显示不设置该值，那些在至少\${index.search.idle.after}秒之前没有收到过搜索请求的分片，将不会收到后台的刷新请求，一直要等这些分片收到搜索才会收到后台的刷新请求，如果当前搜索涉及到操作空闲状态的分片时，刷新操作会被挂起直到下一次后台的刷新操作（1秒之内），此行为旨在在未执行搜索时自动优化默认情况下的批量索引。

   如果不希望执行此默认逻辑，应当显示的将刷新时间间隔设置为1秒。

5. **index.max\_result\_window**

   对当前索引在被执行搜索时，限制此索引的from + size的最大值，以避免占用过大的堆内存， 默认为10000。

6. **index.max\_inner\_result\_window**

   用于控制顶部聚合from+size的总记录，以避免占用过大的堆内存， 默认为100。

7. **index.max\_rescore\_window**

   设置索引的rescore请求的window\_size的最大值， 默认为与index.max\_result\_window的值相同，默认值为10000。

8. **index.max\_docvalue\_fields\_search**

   查询中允许的最多docvalue\_fields数量，默认为100。Doc\_value字段的查询成本很高，因为它们可能会导致对每个字段和每个文档执行搜索。

9. **index.max\_script\_fields**

   查询中允许的最多script\_fields的数量， 默认为32。

10. **index.max\_ngram\_diff**

    NGramTokenizer和NGramTokenFilter的min\_gram和max\_gram之间允许的最大差异值，默认为1。

11. **index.max\_shingle\_diff**

    ShingleTokenFilter的max\_shingle\_size和min\_shingle\_size之间允许的最大差异值， 默认为3

12. **index.blocks.read\_only**

    控制索引及其元数据是否为只读状态，设置为true表示只读，false为非只读。

13. **index.blocks.read\_only\_allow\_delete**

    控制索引及其元数据在只读状态下，是否允许执行删除，设置true表示允许删除，false不允许。

14. **index.blocks.read**

    设置是否允许当前索引可读，true表示不可读。

15. **index.blocks.write**

    设置是否允许当前索引可写，true表示不可写。与只读read\_only不同的是，它不影响到对元数据的操作。例如可以关闭一个blocks.write的索引，但是不可以关闭一个read\_only状态的索引。

16. **index.blocks.metadata**

    控制对metadata的读写，true表示不允许读写。

17. **index.max\_refresh\_listeners**

    索引的每个分片上可用的最大刷新侦听器数，这些侦听器用于实现refresh = wait\_for的请求。

18. **index.analyze.max\_token\_count**

    使用\_analyze API可以生成的最大词项数， 默认为10000。

19. **index.highlight.max\_analyzed\_offset**

    highlight请求可被分析的最大字符数，此设置仅在highlight请求针对没有偏移量或term vector的索引文本时才会生效， 默认为1000000。

20. **index.max\_terms\_count**

    可在term查询中使用的最大term数，默认值为65536。

21. **index.max\_regex\_length**

    可以在正则表达式查询中使用的正则表达式的最大长度， 默认为1000。

22. **index.routing.allocation.enable**

    控制当前索引的分片分配，其值可以设置为：

    all（默认值） - 允许所有分片执行分片分配；
    primaries - 仅允许为主分片分配分片；
    new\_primaries - 仅允许为新创建的主分片分配分片；
    none - 不允许执行分片分配；

23. **index.routing.rebalance.enable**

    设置索引的分片重新平衡策略，其值可以设置为：

    all（默认值） - 允许所有的分片重新平衡；
    primaries - 仅允许主分片重新平衡；
    replicas - 仅允许对副本分片进行重新平衡；
    none - 不允许进行分片重新平衡；

24. **index.gc\_deletes**

    设置已删除文档的版本号仍可用于后续版本化操作的时间， 默认为60秒。



### 修改最大分片数

异常信息：this cluster currently has \[999\]/\[1000\] maximum shards open;

```
kibana tools 配置
PUT /_cluster/settings
{
  "transient": {
    "cluster": {
      "max_shards_per_node":10000
    }
  }
}
```

### 自定义分词方式

#### Analyzers

语法分析器，ES 包含很多内置的分析器，比如 standard, simple, whitespace 等等。

#### Tokenizer

分词器，将指定文本分割为一个一个单词。

#### Character Filter

当一串文本被传递到 Tokenizer 之前，可以用 Character Filter 过滤一遍，处理其中的字符，比如将指定的字符替换成别的字符。

#### Filter

经过 Tokenizer 分词结束的单词，可以用 filter 进行处理，比如将其转换成小写字母之类的。

## redis

### redis-cli命令

```
./redis-cli -a 密码  -p 端口  -h ip  -c 已集群模式连接
```



### 可视化终端

#### AnotherRedisDesktopManager [github](https://github.com/qishibo/AnotherRedisDesktopManager)

## jenkins

### docker容器化部署

```
docker pull jenkins/jenkins
mkdir /home/jenkins_home 
docker run -d --name jenkins -p 8082:8080 jenkins/jenkins
docker run -d --name jenkins -p 9002:8080 -v jenkins:/var/jenkins_home jenkins/jenkins
容器内目录;/var/jenkins_home/secrets/initialAdminPassword
```

#### 修改容器内maven镜像加速

```
/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf
docker cp Jenkins_01:/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf/settings.xml /home
```

```
修改镜像地址：
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>https://maven.aliyun.com/repository/public </url>
</mirror>
```

```
覆盖容器内文件

docker cp /home/settings.xml Jenkins_01:/var/jenkins_home/tools/hudson.tasks.Maven_MavenInstallation/MAVEN_HOME/conf/settings.xml
```



### 前端项目构建

1.选择node环境

![image-20221030192047300](https://file.bbzy.online/blog/image-20221030192047300.png)

2.编写构建shell脚本

```
npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass
npm rebuild node-sass
node -v
npm -v 
echo "开始构建 v0v"
npm install
npm run build
```

3.传送构建文件夹至部署服务器

![image-20221030192221662](https://file.bbzy.online/blog/image-20221030192221662.png)

### 后端项目构建

![image](https://file.bbzy.online/blog/EgF-8MInqobjGyYzoGMdGlrDZXK3dQByXjN3jHu5xKg.png)

![image](https://file.bbzy.online/blog/EI-PIn8NFbNrGLf7srNP22otNRqbXgaUuD3IK6PVhuA.png)

![image](https://file.bbzy.online/blog/s2dC_JCh76ndfp1ruHVEw60rwr1xJOB4gd9E4_LVWPI.png)

![image](https://file.bbzy.online/blog/eS0ge3-1LzxKXyydbL5n9ERb4Ub6HAM_yPYD11P7oF8.png)

![image](https://file.bbzy.online/blog/AetON-uVbxod8w25HccAWTUIPb-6LwDkZ27-RryFzRE.png)

### 删除历史构建

1. 方式一【删除指定区间内】

   ```
   import jenkins.model.*;
   import hudson.model.Fingerprint.RangeSet;
   
   // The name of the job【目录名，如果没有可以不填】.
   def jobName = "目录名/项目名";
   // The range of build numbers to delete.
   def buildRange = "1214-1221";
   def j = jenkins.model.Jenkins.instance.getItemByFullName(jobName);
   def r = RangeSet.fromString(buildRange, true);
   j.getBuilds(r).each { it.delete() }
   ```

2. 方式二【删除不大于maxNumber】的记录

   ```
   def jobName = "目录名/项目名"
   def maxNumber = 1213
   Jenkins.instance.getItemByFullName(jobName);
   Jenkins.instance.getItemByFullName(jobName).builds.findAll {
     it.number <= maxNumber
   }.each {
     it.delete()
   }
   ```

   

### job复制脚本

```
import hudson.model.*
    //源view
    def str_view = "2手心美业测试环境"
    //目标view
    def str_new_view = "7美业生产-node-1"
    //源job名称(模糊匹配)
    def str_search = "test-"
    //目标job名称(模糊匹配后替换)
    def str_replace = "node1"
    def view = Hudson.instance.getView(str_view)
    //copy all projects of a view
    for(item in view.getItems())
    {
      //create the new project name
      newName = item.getName().replace(str_search, str_replace)
      // copy the job, disable and save it
      def job
      try {
          //因为第一次导入后报错，所以添加了try-catch 跳过已存在的job
          job = Hudson.instance.copy(item, newName)
      } catch(IllegalArgumentException e) {
         println(e.toString())
         println("$newName job is exists")
         continue
      } catch(Exception e) {
        println(e.toString())
        continue
      }
      job.disabled = true
      job.save() 
      // update the workspace to avoid having two projects point to the same location
      AbstractProject project = job
      def new_workspace = project.getCustomWorkspace().replace(str_search, str_replace)
      project.setCustomWorkspace(new_workspace)
      project.save()
      //add job to view
      Hudson.instance.getView(str_new_view).add(job)
      println(" $item.name copied as $newName")
    }
```

### 脚本类型备份

**多模块项目部署脚本-jenkins端**

```
#!/bin/bash
echo "工作空间 $WORKSPACE"
echo "即将部署的项目信息 $project_names"
mvn clean package -pl $project_names -am  -DskipTests
echo "打包完成"
#对IFS变量 进行替换处理
OLD_IFS="$IFS"
IFS=","
array=($project_names)
IFS="$OLD_IFS"
echo "Begining build project with maven..."
pfx="-1.jar"
for var in ${array[@]}
do
scp $var/target/$var$pfx root@47.103.120.84:/var/shouxin
echo "程序包传输完成"
done
```

**多模块项目部署脚本-服务端**

```
﻿#!/bin/bash
echo "应用发布中 $2"
#进入项目发布目录 参数为1 需要发布的列表参数2
cd $1
#对IFS变量 进行替换处理
echo "Begining build project with maven..."
pfx="-1.jar"
#对IFS变量 进行替换处理
OLD_IFS="$IFS"
IFS=","
array=($2)
IFS="$OLD_IFS"
for var in ${array[@]}
do
pid=`ps -ef |grep $var$pfx | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ];then
   kill -9 $pid
   echo "$var$pfx端口进程终止成功"
   else 
   echo "没有检测到$var$pfx端口行为"
 fi
java -Xmx$3m -Xss$3m -jar $var$pfx >/var/log/3km_test/$var.out&
#nohup java -Xmx$3m -Xss$3m -jar $var$pfx >/dev/null 2>&1 &
sleep 25
done
```

**前端项目**

```
#!/bin/bash
echo "构建中----"
#npm install
#npm run build
echo "构建完成--^0^不要急，正在传送源码---"
#scp -r  $WORKSPACE/.nuxt root@47.103.120.84:/home/shouxin_pc_online/.nuxt
#scp -r -l 5000 $WORKSPACE/static root@47.103.120.84:/home/shouxin_pc_online/static
#scp -r -l 5000 $WORKSPACE/server root@47.103.120.84:/home/shouxin_pc_online/server
#scp -r -l 5000 $WORKSPACE/nuxt.config.js root@47.103.120.84:/home/shouxin_pc_online
#scp -r -l 5000 $WORKSPACE/package.json root@47.103.120.84:/home/shouxin_pc_online
#scp -r -l 5000 $WORKSPACE/node_modules root@47.103.120.84:/home/shouxin_pc_online/node_modules
scp -r -l 5000 $WORKSPACE/assets root@47.103.120.84:/home/shouxin_pc_online/node_modules/assets
echo "--- 发布成功-----^^^^^^^^^^^^^^"
```

**服务端构架脚本-jar程序**

```
#! /bin/sh
echo "movecomplate"
cd /opt/3km$1
pid=`ps -ef |grep $2.jar | grep -v grep | awk '{print $2}'`
echo "检测到端口值---"$pid
if [ -n "$pid" ];then
   kill -9 $pid
   echo "$2端口进程终止成功"
   nohup java -Xmx$3m -Xss$3m -jar $2.jar  >/dev/null 2>&1 &
    echo "RESTART--SUCCESS"
   else 
   echo "没有检测到$2端口行为"
   #java -Xmx$3m -Xss$3m -jar $2.jar >/var/log/shouxin-log/$2.out&
   nohup java -Xmx$3m -Xss$3m -jar $2.jar  >/dev/null 2>&1 &
   echo "START--SUCCESS"
 fi
echo "END"
```

**服务端构建-前段项目**

```
#!/bin/bash
#your_name="bbzy" 
#echo $your_name
#your_name="123"
#echo $your_name
#echo ${your_name}


echo "添加权限"
chmod -R 777 $1
echo "添加权限-成功"
```



## Nginx

### 基于网关的负载均衡

```
upstream mygateway{
    server 172.16.*.**:10200 weight=1;
    server 172.16.*.**:10200 weight=1;
}
```

```
server {
        listen       80;
        server_name  _;
        large_client_header_buffers 4 16k;
        client_max_body_size 300m;
        client_body_buffer_size 128k;
        proxy_connect_timeout 600;
        proxy_read_timeout 600;
        proxy_send_timeout 600;
        proxy_buffer_size 64k;
        proxy_buffers   4 32k;
        proxy_busy_buffers_size 64k;
        proxy_temp_file_write_size 64k;
       location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://mygateway;
        }
    }
```

### nginx reload 与 restart 的区别

reload --重新加载，reload会重新加载配置文件，Nginx服务不会中断。而且reload时会测试conf语法等，如果出错会rollback用上一次正确配置文件保持正常运行。

restart --重启（先stop后start），会重启Nginx服务。这个重启会造成服务一瞬间的中断，如果配置文件出错会导致服务启动失败，那就是更长时间的服务中断了。
所以，如果是线上的服务，修改的配置文件一定要备份。为了保证线上服务高可用，最好使用reload。

**reload  实现过程**

![image](https://file.bbzy.online/blog/1368870-20200103170923856-1363899594.png)

reload 只是重新加载配置文件，不会清理nginx 的一些缓存，在有些需要清理缓存的场景需要restart ，例如upstream 后端配置的集群服务地址是域名而不是ip，当后端IP 变了，就需要清除该域名的解析缓存，此时需要重启而不是reload。

### 常用经典配置

**二级目录映射 目前前后端项目分离场景多了以后，一般是前端一个端口，后端一个端口。**

如前端是[https://example.com/index.html，调用的接口是https://example.com:4433](https://example.com/index.html，调用的接口是https://example.com:4433)

如此部署对于一些小项目未免有些麻烦，当然你在公网环境下也可以选择使用子域名、其他域名进行跨域访问。

这里说的是同一个域名，同一个端口，让前后端同时进行访问服务。

前端地址：[https://example.com/index.html](https://example.com/index.html)

接口地址：[https://example.com/api/](

这里先记录我已经测试通过的反向代理的方式，即不改变原本的server配置。直接通过反向代理将example.com/api 重定向到 example.com:4443/

```
location ^~ /api/ {
    proxy_pass  https://example.com:4433/;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

location段的^\~是代表某个字符作为开头匹配，这里就是以/api/作为开头进行匹配URL规则。

这里不能写作~~，因为~~是正则匹配的意思，用了正则就不能再proxy\_pass段配置URI了，所谓URI就是4433端口后面的/。

如果不写/，当访问example.com/api/index.php时，会代理到example.com:4433/api/index.php。并不能定位到后端的根路径，所以这里以/结束。

非标准HTTPS端口重定向 如果想让你的非标准https端口，如2083支持HTTP跳转HTTPS访问，请参照如下配置。

```
error_page 497 https://$host:2083$request_uri;
```

如果不这么配置，默认当用户不确定网站协议时，采用了HTTP协议访问你的HTTPS网站就会出现无法访问。

错误如：The plain HTTP request was sent to HTTPS port

HTTP强制跳转HTTPS 日常为了保证访客安全性，我们常常需要让全站保持HTTPS访问，那么你可以通过以下配置。

```
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

端口转发 Nginx端口转发性能也非常强大，可以用于内网[数据库](https://cloud.tencent.com/solution/database?from=10680)、其他服务端口外露的场景。

如将内网的192.168.1.2MySQL数据库端口通过Nginx所在服务器的33062端口进行外露。

```
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

### socker支持配置

```
location  / { 
        proxy_pass http://10.0.0.3:8702/;
            proxy_http_version 1.1;
            proxy_redirect off;
            proxy_buffering off;
            proxy_set_header X-NginX-Proxy true;
            proxy_set_header Host $host;
            proxy_set_header Http-Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
    }
```



## MQ

### rabbitmq

#### docker容器化部署

```
docker pull rabbitmq:3.7.24
```

##### 方式1–默认账户启动

默认guest 用户，密码也是 guest

```
docker run -d --hostname my-rabbit --name mq -p 15672:15672 -p 5672:5672 rabbitmq:3.7.24
```

##### 方式2–指定账户启动

```
docker run -d --hostname my-rabbit --name rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password -p 15672:15672 -p 5672:5672 rabbitmq:management
```

#### 安装插件

```
docker cp /root/rabbitmq_delayed_message_exchange-3.8.0.ez mq:/opt/rabbitmq/plugins
```

#### 启动插件

```
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```

#### 查看插件列表

```
rabbitmq-plugins list
```

#### 启用web客户端

```
rabbitmq-plugins enable rabbitmq_management   # 启用插件
service rabbitmq-server restart    # 重启

通过 http://localhost:15672 查看，使用默认账户guest/guest 登录。 
```



#### 延时插件

插件目录

```
/opt/rabbitmq/plugins
```

启用命令

```
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```

## python

### 包管理工具Anaconda

[官网地址](https://www.anaconda.com/)

#### 基本命令

**conda info**  查询 conda 信息

**conda create -n 环境名 ** 创建环境

**conda info --envs**  查看当前所有环境

**conda activate <env_name>**  激活环境

**conda list** 查看当前环境中的包

**deactivate <env_name>** 推出当前环境

**conda remove -n 环境名  --all** 删除指定环境

**conda install <package_name>**  使用conda安装库

**pip install <package_name>**  使用pip安装



## java

### jabba环境管理工具

[github](https://github.com/shyiko/jabba)

**window安装命令  在powershell上执行下面命令**

```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-Expression (
  Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
).Content
```

**如果执行上面命令报错，可能是win10脚本执行策略问题，修改可以执行下边命令：**

```
Set-ExecutionPolicy -Scope CurrentUser
```

**执行后会出`“ExecutionPolicy:”`提示信息，输入`RemoteSigned`，回车确定后在按`Y`确定执行。**

**验证是否安装成功**

```
在powershell上执行下面命令

jabba --version
```

**注意 此工具需要在powershell上执行工作命令**

**[执行jabba ls-remote 后 raw.githubusercontent.com](https://raw.githubusercontent.com/) 域名报错问题**

执行以下命令

```
$Env:http_proxy="http://127.0.0.1:10809";$Env:https_proxy="http://127.0.0.1:10809"
```

#### 命令

**安装 Oracle JDK**

jabba install 1.8

**从自己指定url安装**

```
jabba install 1.8.0-custom=tgz+
tgz+  =  http://example.com/distribution.tar.gz
```

**将系统中已安装的JDK链接到jabba中**

```
jabba link system@1.8.72 /Library/Java/JavaVirtualMachines/jdk1.8.0_72.jdk
```

**切换使用的JDK版本**

1. 通过命令切换

   jabba use adopt@1.8
   jabba use zulu@~1.6.97

2. 通过配置文件切换

   echo "1.8" > .jabbarc

3. 通过jabba  alias切换

   jabba alias default 1.8   这个命令是每次打开一个新终端，就会自动地 jabba use 这个版本

### JDK工具 keytool生成JKS密钥库

```
keytool -genkey -alias mymedical -keyalg RSA -keypass 123456 -keystore C:\Users\wkq\Desktop\mymedical.jks -storepass 123456
```

```
-genkey 生成密钥

-alias 别名

-keyalg 密钥算法

-keypass 密钥口令

-keystore 生成密钥库的存储路径和名称

-storepass 密钥库口令
```



## mac

### 终端环境切换

```
chsh -s /bin/bash
```

```
chsh -s /bin/zsh
```

### NPM

#### 镜像配置

**修改成腾讯云镜像源**

1、命令

npm config set registry http://mirrors.cloud.tencent.com/npm/

2\. 验证命令

npm config get registry

如果返回http://mirrors.cloud.tencent.com/npm/，说明镜像配置成功。

**修改成淘宝镜像源**

1\. 命令

npm config set registry https://registry.npmmirror.com

2\. 验证命令

npm config get registry

如果返回https://registry.npmmirror.com，说明镜像配置成功。

**修改成华为云镜像源**

1\. 命令

npm config set registry https://mirrors.huaweicloud.com/repository/npm/

2\. 验证命令

npm config get registry

如果返回https://mirrors.huaweicloud.com/repository/npm/，说明镜像配置成功。

**通过使用淘宝定制的cnpm安装**

1\. 安装cnpm

npm install -g cnpm --registry=https://registry.npmmirror.com

2\. 使用cnpm

cnpm install xxx

## nuxt

### 基于pm2的部署

```
pm2 start npm –name ‘pc-nuxt’ – run start将nuxt项目跑在了pm2上，并且命名为 pc-nuxt；
```

```
用法
$ npm install pm2 -g     # 命令行安装 pm2
$ pm2 start app.js -i 4 #后台运行pm2，启动4个app.js
                                # 也可以把'max' 参数传递给 start
                                # 正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js --name my-api # 命名进程
$ pm2 list               # 显示所有进程状态
$ pm2 monit              # 监视所有进程
$ pm2 logs               #  显示所有进程日志
$ pm2 stop all           # 停止所有进程
$ pm2 restart all        # 重启所有进程
$ pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0             # 停止指定的进程
$ pm2 restart 0          # 重启指定的进程
$ pm2 startup            # 产生 init 脚本 保持进程活着
$ pm2 web                # 运行健壮的 computer API endpoint
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程
```

安装

```
sudo apt-get install -y nodejs-legacy
sudo apt-get install -y npm
```

## nvm

[github](https://github.com/coreybutler/nvm-windows)

**基本命令**

| nvm install latest | 安装最新版本的 nodejs |
| ------------------ | --------------------- |
| nvm use 版本号     | 使用指定版本的node    |
| nvm install 版本号 | 安装指定版本的node    |
| nvm ls-remote      | 查看远程版本号        |
