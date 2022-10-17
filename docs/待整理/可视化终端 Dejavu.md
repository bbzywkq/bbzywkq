# 可视化终端 Dejavu
### 启动脚本
```Plain Text
docker run -d --rm --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "http.cors.enabled=true" -e "http.cors.allow-origin=*" -e "http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization" -e "http.cors.allow-credentials=true" docker.elastic.co/elasticsearch/elasticsearch-oss:7.0.1
```
### 容器化部署终端
```Plain Text
docker run -p 1358:1358 appbaseio/dejavu
```
```Plain Text
docker run -p 1358:1358 appbaseio/dejavu:3.3.0
```
### 相关截图
![image](https://file.bbzy.online/blog/zHGC8OZpr_n6Syt5vYg7rvcxHBdjB7T5xlRpqwFthzg.png)

