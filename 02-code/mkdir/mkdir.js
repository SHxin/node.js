var fs = require('fs');

fs.mkdir('01-教学资料',function(err) {
	if(err){
		throw err;
	}

	console.log('创建文件夹成功');

	fs.mkdir('01-教学资料/01-笔记大纲');
	fs.mkdir('01-教学资料/02-作业任务');
	fs.mkdir('01-教学资料/03-素材资料');
	fs.mkdir('01-教学资料/04-随堂笔记');
});

fs.mkdir('02-源代码',function(err) {
	if(err){
		throw err;
	}

	fs.mkdir('02-源代码/01-预习代码');
	fs.mkdir('02-源代码/02-课堂代码');
});

fs.mkdir('03-视频');
fs.mkdir('04-其他资料');