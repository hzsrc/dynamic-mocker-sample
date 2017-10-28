//express_demo.js 文件
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/login.html', readSend.bind(null, 'login.html'))
app.get('/index.html', readSend.bind(null, 'index.html'))
 
 function readSend(file, req, res) {
    res.writeHead(200, {"content-type":"text/html"}});
    res.end(fs.readFileSync(file));
}
var server = app.listen(8090, function () {
 
  var host = 'localhost'
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})