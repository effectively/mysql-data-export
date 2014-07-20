# mysql数据导出
 有时候线上数据有问题，需要导出到本地进行测试，之前是写多个sql依次导出，重复工作比较多。
 此工具只需要简单配置，即可导出指定表的符合条件的数据。

## 使用方法
```bash
# 进行到模块目录
cd export
# 配置数据源及过滤条件
vim config.js
# 添加要导出的表
vim tables.js
# 最后，执行导出操作
node app.js
# 操作完成后,sql语句会生成到export下的result目录中
```

## 数据库需要通过ssh连接怎么办
 调用下述命令可以通过127.0.0.1:3307连接远程数据库:
 ```bash
 ssh -f username@ssh-hostname -Pssh-port -L 3307:mysql-hostname:mysql-port -N
 ```