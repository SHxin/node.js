//拼接字符串方法
for(var i = 0; i < 8; i++){
	var str = '';
	for(var j = 0; j <= i; j++){
		str += '#';
	}
	console.log(str);
}

//新方法
//process.stdout.write()
for(var i = 0; i < 8; i++){
	for(var j = 0; j <= i; j++){
		process.stdout.write('@');
	}
	process.stdout.write('\n');
}