# anaconda使用流程
镜像安装包下载windows：[https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

镜像安装包下载linux:[https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

# 配置Anaconda源
```Plain Text
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ 
conda config --set show_channel_urls yes
```
镜像源添加完成**可能出现的错误**

**conda install 仍然出现下载速度慢的错误**

这个时候可以直接将 C:/User/用户名 目录下 .condarc文件 里面的-default一行删去

![image](images/TJkNjmPdz-QggayjObsFz-6NsH0TV365m7UGQqCtolM.png)



# 命令说明：
|conda info|查询 conda 信息| |
| ----- | ----- | ----- |
|conda create -n 环境名|创建环境| |
|conda info --envs|查看当前所有环境| |
|Conda activate 环境名<br>Source activate 环境名<br>activate 环境名|激活环境| |
|conda list<br>pip list|查看当前环境中的包| |
|conda install<br>pip install|安装包| |
|deactivate 环境名|退出当前环境| |
|conda remove -n 环境名  --all|删除当前环境| |
| | | |



# 环境中用conda或者pip安装包
```Plain Text
Conda install 包名称
或者pip install 包名称 -i https://pypi.tuna.tsinghua.edu.cn/simple（清华镜像）
或者pip install 包名称 -i  https://pypi.doubanio.com/simple/ （豆瓣镜像）
```
