//引入fs模块
var fs = require('fs');

var str = '能不能给我一首歌的时间?'

//fs.writeFile('文件路径','写入的内容','编码格式',成功的回调(error));
//回调函数接收一个参数 err 
//如果有错误,接收error
//如果没有错误,是undefined
fs.writeFile('1.txt', str, function(err) {
	if(err){
		throw err;
	}

	console.log('写入成功');
});


/*
	注意:
	1. 异步执行
	2. 如果文件已经存在,替换掉
	3. 默认写入的文件编码为utf-8
*/