# 安装java环境
### yum search java|grep jdk
```Plain Text
yum install java-1.8.0-openjdk
```
### 默认安装路径在/usr/lib/jvm/下边
### 查看路径
查看安装路径(如下所示)：

```Plain Text
which java
ls -lrt /usr/bin/java
```
### 查看版本
java -version

### 安装jre
```Plain Text
yum install java-1.8.0-openjdk-devel.x86_64
```
javac

### 设置环境变量（可省略）
```Plain Text
修改/etc/profile文件：vi /etc/profile

   #set java environment
   JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-1.el7_6.x86_64
   JRE_HOME=$JAVA_HOME/jre
   CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
   PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
   export JAVA_HOME JRE_HOME CLASS_PATH PATH
```
### 更新环境变量
source /etc/profile

