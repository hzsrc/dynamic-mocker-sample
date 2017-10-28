const config = {
    mockEnabled: true,
    mockPath: 'mock/root', //模拟文件根目录
    proxyTarget: 'https://www.baidu.com',//后台接口服务地址（代理目标），为空表示不代理
    isHttps: false, //是否https
    port: 8085, //端口
    checkPath: function (urlPath) { //urlPath校验函数，返回true表示需要进行mock处理，为false直接走代理
        return true
    },
    beforeResponse: function (respData, req) { //数据返回前的回调钩子，respData包含status、headers、body属性
        // For CORS
        respData.headers["Access-Control-Allow-Origin"] = req.headers["origin"] || req.headers["Origin"];
        respData.headers["Access-Control-Allow-Credentials"] = "true";
        respData.headers["Access-Control-Allow-Headers"] = "Content-Type,Content-Length,Authorization,Access,X-Requested-With,your_http_header";
        //respData.headers["Access-Control-Allow-Methods"] = "PUT,POST,GET,DELETE,PATCH,OPTIONS";
    }
}
module.exports = config;
