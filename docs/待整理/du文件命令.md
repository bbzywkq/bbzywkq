# du文件命令
### 显示当前目录下所有一级子目录的大小：
```Plain Text
du -h --max-depth=1
```
### 显示当前目录的总大小：
```Plain Text
du -sh
```
### 显示当前目录下所有子目录的大小，递进到最大深度：
```java
du -h
```
一、服务器运行一点时间后各种的项目文件，日志文件，数据库备份登，会越来越多，在linux下可以使用 du 和 df 命令查看。

1、**df -h** 命令查看整体磁盘使用情况

![image](images/FlBBpkJh5Putu8m-nJu2ElzUEgIJL44TgKL3AmUFzWg.png)

2、 使用 **du -ah --max-depth=1**  /    可以查看根目录下各个文件占用情况

![image](images/0D4fok4LWZJ1aHeZez_AuM9Abc4dSEefhKTDg2Qd8l0.png)

使用命令du -h –max-depth=1 /var/log/\* 查看/var/log路径下文件的大小

du -sh /\* 查看哪个目录最大，一步一步的查找大文件，比如：

![image](images/me_rkjtPSGAFK6k36wP01GPiyX9xRMIU0OdRGEpL8zg.png)

3、

![image](images/L_xt6GPHq3KtNfmOopDfrLaBOrYVGtS21ZYjnBveTFE.)

 查看某个目录： **du -bsh /\*\*\*/** 命令

     例：查看根目录下的/bin/文件占用情况 

![image](images/qkHVEhypHkIck1M8DZjvrEhA3uJxGNd9uiR-uULKYGw.png)

4、用find 命令找到当前目录大于500M文件   **find . -size +500M** 

![image](images/9QQbB_MR2dNKw4v-USXafmoqVNTzpAJJlwh6HnPzjDU.png)

5、查找跟目录下大于10M的文件
**find / -type f -size +10000000c -exec du -sh {} \\;**

![image](images/vOQHdDi6VGPdb-pT9n-8mTeCEFYeEJMXXFNdy_RXJdk.png)

二、**du**常用的选项：
　　-h：以人类可读的方式显示
　　-a：显示目录占用的磁盘空间大小，还要显示其下目录和文件占用磁盘空间的大小
　　-s：显示目录占用的磁盘空间大小，不要显示其下子目录和文件占用的磁盘空间大小
　　-c：显示几个目录或文件占用的磁盘空间大小，还要统计它们的总和
　　--apparent-size：显示目录或文件自身的大小
　　-l ：统计硬链接占用磁盘空间的大小
　　-L：统计符号链接所指向的文件占用的磁盘空间大小

1、**du -sh** : 查看当前目录总共占的容量。而不单独列出各子项占用的容量 

![image](images/kBP3Ohd7edsj5-mLbUwbwtAMVBzPvH_u1Ax1nB9AeQc.png)

 2、**du -lh --max-depth=1** : 查看当前目录下一级子文件和子目录占用的磁盘容量。

![image](images/wRli3aocmkQPqMbwYqTh9npaRUvgHMhcDFwJVoJk8aE.png)

4.**lsof -n | grep deleted**  (查看删除占用)

![image](images/UPOm2PpnIBnyEd13WhXlQj97oCseKl7y04j8sO1yaD4.png)

