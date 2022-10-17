# win10配置免回环网络验证
### 地址定位：
win + r
打开注册表编辑器： regedit

```Plain Text
HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings
```
### 对单个应用设置
获取SID
以管理员身份运行CMD，输入：

```Plain Text
CheckNetIsolation.exe loopbackexempt -a -p=SID值
```
```Plain Text
CheckNetIsolation.exe loopbackexempt -a -p=S-1-15-2-1609473798-1231923017-684268153-4268514328-882773646-2760585773-1760938157
```
### 对所用应用应用设置
```Plain Text
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p

```
### 查看当前设置的列表
```Plain Text
CheckNetIsolation.exe loopbackexempt -s
```
