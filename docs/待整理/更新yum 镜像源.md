# 更新yum 镜像源
## 备份系统默认镜像源
```Plain Text
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```
## 下载
```Plain Text
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```
## 清理缓存
```Plain Text
yum clean all
```
## 运行yum makecache生成缓存
```Plain Text
yum makecache
```
