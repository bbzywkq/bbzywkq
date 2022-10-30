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

## git

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

## docker

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

### 可视化终端

#### AnotherRedisDesktopManager [github](https://github.com/qishibo/AnotherRedisDesktopManager)

## jenkins

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



## MQ

### rabbitmq

#### 延时插件

插件目录

```
/opt/rabbitmq/plugins
```

启用命令

```
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
```





# 已整理至：资料.md
