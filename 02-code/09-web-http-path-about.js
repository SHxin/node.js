//引入http模块
var http = require('http');

//初始化http服务实例
var server = http.createServer();

//有人请求时会触发
//req,请求相关
//res,相应相关
server.on('request',function(req,res) {

	console.log(req.url);

	// console.log('有人请求了');

	//往响应报文中写内容
	res.writeHead(200,'ok',{
		"Content-Type": "text/html",
        "name": "pm"
	})

	//往响应体中写东西
	res.write('<h1>hello world</h1>');

	//响应结束
	res.end();
});

//监听8080端口
server.listen('8080',function(){
	console.log("服务器已经开启,监听端口为8080,请访问: http://localhost:8080");
});