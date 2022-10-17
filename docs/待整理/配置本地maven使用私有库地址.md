# 配置本地maven使用私有库地址
### 配置本地maven seting.xml文件添加节点信息如下
#### 开启了匿名访问下配置
```Plain Text
<mirror>
        <id>anonymous</id>
        <mirrorOf>*</mirrorOf>
        <name>Administrator User</name>
        <url>http://192.168.1.107:8081/repository/maven-public/</url>
</mirror>
```
#### 未开启匿名访问并且禁用掉了anonymous用户
![image](https://file.bbzy.online/blog/zyft_Hx_LsOGqLFdxbm3dYyUpvmODQcIm1fY8KqxnIk.png)

##### 如下
```Plain Text
<server>
    <id>admin</id>
    <username>admin</username>
    <password>wkq4978dmm</password>
</server>
```
```Plain Text
<mirror>
    <id>admin</id>
    <mirrorOf>*</mirrorOf>
    <name>admin</name>
    <url>http://maven.medicalsj.com/repository/maven-public/</url>
</mirror>
```
