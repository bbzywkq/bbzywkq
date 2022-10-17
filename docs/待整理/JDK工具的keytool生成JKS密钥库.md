# JDK工具的keytool生成JKS密钥库
```Plain Text
keytool -genkey -alias mymedical -keyalg RSA -keypass 123456 -keystore C:\Users\wkq\Desktop\mymedical.jks -storepass 123456
```
```Plain Text
-genkey 生成密钥

-alias 别名

-keyalg 密钥算法

-keypass 密钥口令

-keystore 生成密钥库的存储路径和名称

-storepass 密钥库口令
```
