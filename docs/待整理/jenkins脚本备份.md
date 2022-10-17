# jenkins脚本备份
# 多模块项目
### 多模块项目部署脚本-jenkins端
```Plain Text
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
### 多模块项目部署脚本-服务端
```Plain Text
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


# 前端项目
```Plain Text
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


# 服务端构建脚本
### 服务端构架脚本-jar程序
```Plain Text
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
### 服务端构建-前段项目
```Plain Text
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
