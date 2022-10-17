# docker 部署kibana
```Plain Text
docker run -d --name kibana --link=nervous_cohen:elasticsearch -p 5601:5601 kibana:7.3.0
```
