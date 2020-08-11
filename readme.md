这是复现Taro v3.0.7的bug的repo。

bug：getCurrentInstance().router.params无法正常获取路由参数

复现步骤：
1、npm run dev:h5，把页面跑起来

2、在链接后加上query-string，如：http://172.22.103.10:10086/#/pages/index/index?foo=hello

3、根据页面上的文字和按钮操作，复现bug
