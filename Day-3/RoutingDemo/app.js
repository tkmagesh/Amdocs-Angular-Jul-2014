var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path"),
	querystring = require("querystring"),
	knownFileExtenstions = [".html",".css",".img",".js"],
	tasks = [
		{id : 1, name : "Task - 1", isCompleted : false, category : "Personal"},
		{id : 2, name : "Task - 2", isCompleted : false, category : "Official"},
	];

String.prototype.endsWith = function(extn){
   return this.substr(this.length - extn.length, extn.length) === extn;
}

http.createServer(function(req,res){
	console.log(req.method);
	var pathName = url.parse(req.url).pathname;
	var resourceName = path.join(__dirname, pathName);
	var isFile = knownFileExtenstions.some(function(ext){
		return resourceName.endsWith(ext);
	});
	if (isFile){
		fs.exists(resourceName, function(){
			fs.createReadStream(resourceName, {encoding : "utf8"}).pipe(res);
		});	
	} else {
		if (req.method === "GET" && pathName === "/tasks"){
			setTimeout(function(){
				res.write(JSON.stringify(tasks));
				res.end();
			},10000);
		}
		if (req.method === "POST" && pathName === "/tasks"){
			var data = '';
			req.on('data',function(chunk){
				data += chunk;
			});
			req.on('end', function(){
				var newId = tasks.reduce(function(seed,task){
				   return task.id > seed ? task.id : seed;
				},0) + 1;
				var newTask = JSON.parse(data);
				newTask.id = newId;
				tasks.push(newTask);
				res.write(JSON.stringify(newTask));
				res.end();
			});
		}
	}
	
}).listen(8080);
console.log("Server listening on port 8080..");