# nexus3权限配置
### 项目使用nexus私服的jar包，在项目的pom.xml文件中指定私服仓库
```Plain Text
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
### 项目使用nexus私服的插件，在项目的pom.xml文件中指定插件仓库
```Plain Text
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
### 如果想本机所有的maven项目都使用私服的组件，可以在maven的设置文件settings.xml中添加属性，并激活
```Plain Text
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
### 项目发布到私服，maven项目使用命令：mvn clean deploy；需要在pom文件中配置一下代码；
```Plain Text
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
### 注意还需要配置mvn发布的权限，否则会报401错误，在settings.xml中配置权限，其中id要与pom文件中的id一致
```Plain Text
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
### 上传第三方的jar包，选择3rd party–>Artifact Upload–> 选择GAV方式–>填好构建参数–>增加jar包–>上传，在Browse Storeage查看
