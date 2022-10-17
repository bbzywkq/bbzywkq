# jabba 使用mac&windows
# 仓库地址：[https://github.com/shyiko/jabba](https://github.com/shyiko/jabba)
window安装命令  在powershell上执行下面命令

```Plain Text
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-Expression (
  Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
).Content
```


如果执行上面命令报错，可能是win10脚本执行策略问题，修改可以执行下边命令：

```Plain Text
Set-ExecutionPolicy -Scope CurrentUser
```
执行后会出`“ExecutionPolicy:”`提示信息，输入`RemoteSigned`，回车确定后在按`Y`确定执行。

# **验证是否安装成功**
在powershell上执行下面命令

jabba --version



# 注意 此工具需要在powershell上执行工作命令


# [执行jabba ls-remote 后 raw.githubusercontent.com](https://raw.githubusercontent.com/) 域名报错问题 执行以下命令


```Plain Text
$Env:http_proxy="http://127.0.0.1:10809";$Env:https_proxy="http://127.0.0.1:10809"
```


# 常用命令
|jabba ls-remote|查询远程可用的版本|
| ----- | ----- |
|jabba ls|查询安装的所有jdk|
| | |
| | |
| | |
| | |



**2、安装JDK**

1）安装 Oracle JDK

```Plain Text
jabba install 1.8
```
2）安装 Oracle Server JRE

```Plain Text
jabba install sjre@1.8  
```
3）安装 Adopt OpenJDK (Hotspot)

```Plain Text
jabba install adopt@1.8-0
```
4）安装 Adopt OpenJDK (Eclipse OpenJ9)

```Plain Text
jabba install adopt-openj9@1.9-0
```
5）安装 Zulu OpenJDK

```Plain Text
jabba install zulu@1.8
jabba install zulu@~1.8.144 #相同的效果："zulu@>=1.8.144 <1.9" 
```
6) 安装 IBM SDK, Java Technology Edition

```Plain Text
jabba install ibm@1.8
```
7）安装 GraalVM CE

```Plain Text
jabba install graalvm@1.0-0
```
8）安装 OpenJDK

```Plain Text
jabba install openjdk@1.10-0
```
9）安装 OpenJDK with Shenandoah GC

```Plain Text
jabba install openjdk-shenandoah@1.10-0
```
10）从自己指定url安装

支持: zip (since 0.3.0), tgz, tgx (since 0.10.0), dmg, bin, exe  

jabba install 1.8.0-custom=tgz+

```Plain Text
http://example.com/distribution.tar.gz

```
jabba install 1.8.0-custom=tgx+

```Plain Text
http://example.com/distribution.tar.xz

```
jabba install 1.8.0-custom=zip+file:///opt/distribution.zip

**3、卸载JDK**

```Plain Text
jabba uninstall zulu@1.6.77
```
**4、将系统中已安装的JDK链接到jabba中**

```Plain Text
jabba link system@1.8.72 /Library/Java/JavaVirtualMachines/jdk1.8.0_72.jdk
```
**5、切换使用的JDK版本**

1）通过命令切换

```Plain Text
jabba use adopt@1.8
jabba use zulu@~1.6.97
```
2）通过配置文件切换

```Plain Text
echo "1.8" > .jabbarc
```
3）通过jabba  alias切换

```Plain Text
jabba alias default 1.8
```
这个命令是每次打开一个新终端，就会自动地 jabba use 这个版本







man需要切换到bash命令终端安装使用脚本，切换命令如下

## 切换到bash
```Plain Text
chsh -s /bin/bash
```
## 切换到zsh
```Plain Text
chsh -s /bin/zsh
```
重启终端生效（强制退出后再打开）

