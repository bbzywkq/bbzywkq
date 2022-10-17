# 上传jar包至私服
### 添加账号
修改 seting.xmlz中 servers节点 添加授权的账号

```Plain Text
<server>
    <id>admin</id>
    <username>admin</username>
    <password>wkq4978dmm</password>
</server>
```
###### 注意可添加多个
### 项目环境pom文件添加节点
```Plain Text
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
```
###### 注意此处的id 对象seting.xml中server 节点中的id
#### 日志提示上传成功
![image](images/p-ZDEZwrTqrtjNZCQaCd0nB6kmoKMhwIammq5la1YtM.png)

#### 打开nexus3后台验证
![image](images/qSM9UhKl5phxNZvc4lKXFFDg-PQkm_juxVqYZX6q3AA.png)

### 发布至稳定版本库
