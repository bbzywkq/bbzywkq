# git分支操作
### 创建及切换分支
```Plain Text
git chekcout -b dev
```
```Plain Text
git push origin dev:dev
```
### 删除本地的bug\_xzx分支
```Plain Text
git branch -d bug_xzx
```
### 删除远程的bug\_xzx分支
```Plain Text
git push origin --delete bug_xzx
```
### 拉去远程分支
```Plain Text
git fetch origin dev（dev为远程仓库的分支名）
git checkout -b dev(本地分支名称) origin/dev(远程分支名称)
git pull origin dev(远程分支名称)
```
