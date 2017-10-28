//引入fs
var fs = require('fs');

//读文件
fs.readFile('1.txt',function(err,data) {
	if (err) {
		throw err;
	}

	console.log(data);
	//打印的是buffer,字节数组
	//解决方法1: .toString()
	console.log(data.toString());
});

//解决方法2: 传第二个参数
fs.readFile('1.txt','utf-8',function(err,data) {
	if (err) {
		throw err;
	}

	console.log(data);
});
