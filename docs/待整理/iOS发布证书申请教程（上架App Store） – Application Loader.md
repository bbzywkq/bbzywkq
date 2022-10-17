# iOS发布证书申请教程（上架App Store） – Application Loader
**一、下载安装iOS上架辅助软件Appuploader**

**Appuploader下载链接**

Appuploader可以辅助在Windows、linux或mac系统直接申请iOS证书p12，及上传ipa到App Store，最方便在Windows开发上架没有苹果Mac电脑的开发者！

配合本教程使用，可以快速掌握如何真机测试及上架！

**下载软件包后解压直接使用，无需安装。**

![image](https://file.bbzy.online/blog/3241.png)

[java环境安装教程](http://www.applicationloader.net/blog/zh/2172.html)

**二、申请iOS发布证书（p12文件）**

发布证书用于上架，证书有p12及mobileprovision两个文件，配套使用，先申请p12！

2.1、用苹果开发者账号登录appuploader软件后，选择证书进入，点击右下角+ADD选择

![image](https://file.bbzy.online/blog/1-3.png)

![image](https://file.bbzy.online/blog/2-3.png)

类型：下拉选择**发布证书**

证书名称：不要中文、不要太长了、随意设置

邮箱：随意

密码：证书的密码、比如设置123这样，不用很复杂，记好、打包时要用、很重要

应用id：**这里不用选**

点击ok创建。

![image](https://file.bbzy.online/blog/8-2.png)

注意：iOS发布证书最多能申请3个，如果账号已经有3个发布证书了，将申请报错（如下图）

![image](https://file.bbzy.online/blog/4253.png)

p12有数量限制，但可以公用！ 也就是一个p12可以对应无数个描述文件（mobileprovision）组成无数套证书上架不同的APP！

可以使用之前申请的，也可以删掉之前的发布证书，重新创建，不会影响已上架的app。

2.2、创建成功后，找到刚创建的发布证书（**iOS Distribution**这个类型的就是发布证书，如果之前创建过看过期时间或者ID就知道哪个是新创建的了）！

**点击p12 文件**,下载保存.p12证书文件到电脑。

![image](https://file.bbzy.online/blog/9-3.png)

**三、创建iOS发布描述文件（.mobileprovision文件）**

3.1、点击右下角BACK、返回Appuploader首页，选择描述文件进去。

![image](https://file.bbzy.online/blog/5-3.png)

3.3、点击右下角+ADD，进入申请界面！

Type：下拉选择**发布版profile**

应用id:下拉选择对应的应用id（**又称套装id，appid，BundleID，包名**）

新APP上架需要先添加一个新的应用id（每个APP对应一个应用id），如果已经加过了直接选择。

[点击查看应用id添加教程（添加后返回本教程，继续申请流程）](http://www.applicationloader.net/blog/zh/3645.html)

证书：选中全部就行

Devices：发布版不用选设备

输入名称：不要中文，随意，123之类的就行，注意不要跟之前申请过的名称一样），点击ok创建。

![image](https://file.bbzy.online/blog/10-2.png)

3.4、选择刚创建的发布版描述文件（iOS Distribution这个类型的就是发布描述文件，找刚创建的输入的名称），点击Download下载，保存到电脑

![image](https://file.bbzy.online/blog/11-2.png)

申请到p12及mobileprovision这两个iOS证书文件即可去打包了！

  [iOS证书申请](http://blog.applicationloader.net/blog/zh/help/ioszhengshu), [中文文档](http://blog.applicationloader.net/blog/zh/help/document_zh)