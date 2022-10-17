# docker 部署gitlabce
```bash
$ docker run -d --name gitlab2 --restart always \
    -p 19443:443 -p 19080:80 -p 19022:22 \
    -v /path/to/conf:/etc/gitlab \
    -v /path/to/logs:/var/log/gitlab \
    -v /path/to/data:/var/opt/gitlab \
    033bcfa1b036
```
