const path = require('path');
const {AGCClient} = require("@agconnect/common-server");
const {CredentialParser} = require("@agconnect/common-server");
const {AGCFunction} = require("@agconnect/function-server");

// 加载凭证文件
try {
  console.log("--------agc-------")
  let client_name = "./agc-apiclient-test-test.json";
  let client_path = path.join(__dirname, client_name);
  let credential = CredentialParser.toCredential(client_path);
  AGCClient.initialize(credential);
} catch (error) {
  console.error(error);
  return;
}
let agcFunction = new AGCFunction();

// 本地调用测试
let myHandlerTest = async function() {
    console.log("-------call tag 1--------");

    // 构造云函数实例
    try {
        let value = agcFunction.wrap("callback", "$latest");
        value.setTimeout(20000);

        console.log("-------调用------");

        // 无参调用
        let res1 = await value.call();
        console.log("res1： " + res1.getValue());

        // string类型传参调用
        let str = "test s string";
        let res2 = await value.call(str);
        console.log("res2： " + res2.getValue());

        // Buffer类型传参调用
        const buf = Buffer.alloc(10, 1);
        let res3 = await value.call(buf);
        console.log("res3： " + res3.getValue());

        console.log("-------成功--------");
    } catch (error) {
      console.log("-------调用异常-------");
      console.log(error);
    }
}

myHandlerTest();

// 上传AGC网站调用
let myHandler = async function(event, context, callback, logger) {
    logger.info("-------call tag 1--------");

    // 返回结果内容
    let good_res = new context.HTTPResponse({"good": "good"},{
        "res-type": "simple example",
        "faas-content-type": "json"
    }, "application/json", "200");
    let bad_res = new context.HTTPResponse({"bad": "bad"},{
        "res-type": "simple example",
        "faas-content-type": "json"
    }, "application/json", "200");

    try {
        let res = await agcFunction.wrap("callback", "$latest").call();
        logger.info("---------调用--------");
        logger.info("res: " + res.getValue());

        logger.info("-------成功--------");
        callback(good_res);
    } catch (error) {
        logger.error("-------调用异常-------");
        logger.error(error);
        callback(bad_res);
    }
}

module.exports.myHandler = myHandler;