# MP or查询问题
```Plain Text
QueryWrapper userWrapper = new QueryWrapper();
userWrapper.eq(“name”, name);
userWrapper.and(wrapper ->wrapper.eq(“pwd”, pwd).or().eq(“phone”, phone));
```
