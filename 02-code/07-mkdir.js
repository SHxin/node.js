var fs = require('fs');

fs.mkdir('mkdir',function(err) {
	if(err){
		throw err;
	}

	console.log('创建文件夹成功');
});