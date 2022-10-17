# github初始化存储库
### 通过命令行创建一个新的存储库
```Plain Text
echo "# springboot" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/bbzyalone/springboot.git
git push -u origin master
```
### 推送一个已经创建的存储库
```Plain Text
git remote add origin https://github.com/bbzyalone/springboot.git
git branch -M master
git push -u origin master
```
### 从另一个已存在的存储库导入代码
![image](images/vcRocG3QxsBvyJrxEpvXoxGbdGrvpjrcfGyQ0O8MeSs.png)

