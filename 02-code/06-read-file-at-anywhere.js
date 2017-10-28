var fs = require('fs');

var path = require('path');

//path.join()方法
//自动帮我我们拼接路径

fs.readFile(path.join(__dirname,'1.txt'),'utf-8',function(err,data) {
	if(err){
		throw err;
	}

	console.log(data);
});