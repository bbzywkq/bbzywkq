# git仓库权限及提交合并说明
[toc]

# MyMedicalMobileH5 赫菲健康H5端(app内容分享) 前端
[http://git.medicalsj.com/mymedical/mymedicalmobileh5.git](http://git.medicalsj.com/mymedical/mymedicalmobileh5.git)

分支: master/test/dev

开发操作分支(dev)：睢琳娇，王馨

# MyMedicalForumWeb 赫菲健康PC端 前端
[http://git.medicalsj.com/mymedical/MyMedicalForumWeb.git](http://git.medicalsj.com/mymedical/MyMedicalForumWeb.git)

分支：master/test/dev

开发操作权限（dev）:  睢琳娇，王馨

# MyMedicalAdminWeb 赫菲健康PC后台系统 前端
[http://git.medicalsj.com/mymedical/MyMedicalAdminWeb.git](http://git.medicalsj.com/mymedical/MyMedicalAdminWeb.git)

分支：master/test/dev

开发操作权限(dev)： 睢琳娇，王馨

观察者权限：杜博艺，郭丽君

# MyMedicalForumMobileV2 赫菲健康移动端 前端
[http://git.medicalsj.com/mymedical/mymedicalforummobilev2.git](http://git.medicalsj.com/mymedical/mymedicalforummobilev2.git)

分支：master/test/dev

开发操作权限 (dev) ：睢琳娇，王馨

观察者权限：杜博艺，郭丽君

# MyMedicalForum 赫菲健康 后端
[http://git.medicalsj.com/mymedical/MyMedicalForum.git](http://git.medicalsj.com/mymedical/MyMedicalForum.git)

分支：master/test/dev-remote/dev

开发操作权限（dev-remote/dev）: 杜博艺，郭丽君

# MyMedicalAdmin 赫菲健康管理系统  后端
[http://git.medicalsj.com/mymedical/MyMedicalAdmin.git](http://git.medicalsj.com/mymedical/MyMedicalAdmin.git)

分支：master/test/dev-remote/dev

开发操作权限（dev-remote/dev）: 杜博艺，郭丽君



# 提交流程及规范
* 各开发岗规范在对应开发分支 进行开发任务。
* 代码每次改动提交时 需要根据改动大小和波及面 commit 详细改动说明 。
* 阶段任务完成后需要将对应代码提交至master分支发布 及归档 。
* 禁止在同一分支 进行各环境的开发和测试任务。
例如不能在dev 分支进行测试及打发布包工作  功能项开发完成  应该合并到测试分支由测试人员进行标准化测试
测试通过提交到master分支进行发布 或者打包操作。
* 代码合并需要由对应开发人员进行合并申请，合并申请及代码审核通过后，方可执行合并。
* 代码合并时需要提供改动和新增内容列表，包括代码层改动，配置层改动，和数据层改动的合并申请说明。

# 代码合并（例如 dev-->test 操作申请如下：）
1. 执行推送命令，确保开发分支改动已经推送到远程

![image](https://file.bbzy.online/blog/V2nTP9p9BFxxNzqNfX1rstkzu0f3QA7mJ4vXd8l1P40.png)

2. 进入gitlab web端通过已下任意入口 创建merge request 

![image](https://file.bbzy.online/blog/Zry1UqlhfwSAewDY9F9VRGa26UymNdLrdAe96zNvTmM.png)

---
![image](https://file.bbzy.online/blog/_3ZEN28bhoiu6dP90_hfLVdOxdMoPQSrIwBkQmgJ3LU.png)

---
![image](https://file.bbzy.online/blog/NCPLDJzwJ4lWQXsvEgwN1xEG4u4ITRtSr4Ez_sQkHeg.png)

---
![image](https://file.bbzy.online/blog/e_rDzwVGcMs-OVWVfPnq0FwCf-8RwDJzrdri6DG_5x0.png)

提交此合并请求，代码审核通过后 会自动进行合并操作。

仓库变动-MyMedicalForum(论坛系统)

提交人：王轲强

提交的分支：dev