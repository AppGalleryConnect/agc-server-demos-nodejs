# AGCServerFunction_Nodejs 快速入门


## 简介
通过该demo演示用户如何在自己的工程中集成Server端云函数SDK，使用云函数互调功能。

## 环境要求
* Node.js v10.12.0及以上环境

## 快速入门
在运行quickstart前，您需要
1. 如果没有华为开发者联盟帐号，需要先[注册账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148) 并通过实名认证。
2. 使用申请的帐号登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) 网站创建一个项目。
3. 开通云函数服务后，在“项目设置”页面中点击“Server SDK”页签，点击认证凭据中的“创建”，创建完后生成认证凭据，点击“下载认证凭据”。
4. 将下载后的认证凭据文件agc-apiclient-*.json放置到您指定路径下，在[index.js](./index.js)中初始化SDK时将会使用到该文件.
5. 在命令行中依次运行如下命令以运行demo：
    ``` bash
    # 1.1 安装 AGC function-server sdk
    npm install --save @agconnect/common-server@1.0.0
    npm install --save @agconnect/function-server@1.0.0
    # 1.2 或向package.json文件添加如下配置,再执行npm install命令
    "dependencies": {
      "@agconnect/common-server": "1.0.0",
      "@agconnect/function-server": "1.0.0"
   }
   
    # 2 启动demo
    npm run build
    ```
6. 更多细节请查看以下链接： [Function-Server](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-cloudfunction-functioncall-server-nodejs-0000001192526140)

## 示例代码

Sample code: index.js

## 技术支持

如果您对使用AppGallery Connect示例代码有疑问，请通过如下途径寻求帮助：
- 访问[Stack Overflow](https://stackoverflow.com/) , 在`AppGallery`标签下提问，有华为研发专家在线一对一解决您的问题。
- 访问[华为开发者论坛](https://forums.developer.huawei.com/forumPortal/en/home) AppGallery Connect板块与其他开发者进行交流。

如果您在尝试示例代码中遇到问题，请向仓库提交[issue](https://github.com/AppGalleryConnect/agc-demos/issues) ，也欢迎您提交[Pull Request](https://github.com/AppGalleryConnect/agc-demos/pulls) 。

## 授权许可
该示例代码经过[Apache 2.0 授权许可](http://www.apache.org/licenses/LICENSE-2.0) 。
