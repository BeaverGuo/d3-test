//布署

#### 编译部署

`$ ./make.sh` 

编译好后，build_out 目录为外网部署文件，build目录为内网部署文件。

如内网或外网ip或数据服务地址改变，请修改以下文件中的配置项：

> webpack.prod.config_inside.js 内网部署配置文件
> webpack.prod.config_outside.js 外网部署配置文件
> app\Ajax\Config\config_inside.json 内网数据及其他服务地址配置文件
> app\Ajax\Config\config_out.json 外网数据及其他服务地址配置文件
#!/bin/sh

rm build -Rf 
rm build_out -Rf
cp webpack.prod.config_outside.js webpack.prod.config.js -f
cp app/Ajax/Config/config_out.json app/Ajax/Config/config.json -f 
npm run build 
mv build build_out 
cp webpack.prod.config_inside.js webpack.prod.config.js -f 
cp app/Ajax/Config/config_inside.json app/Ajax/Config/config.json -f 
npm run build


地址： 10.215.160.35
协议： SFTP
登录账号： ecidi
密码： *****