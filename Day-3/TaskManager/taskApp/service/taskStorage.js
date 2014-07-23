angular
	.module("taskApp")
	.service('taskStorage', function TaskStorage($http){
		this.getAll = function(){
			return $http.get('/tasks');
		}
	});
	/*.service('taskStorage', function TaskStorage($window, Task){
		console.log($window);
		var localStorage = $window.localStorage;
		this.getAll = function(){
			var result = [];
			for(var i=0;i<localStorage.length;i++){
				var key = localStorage.key(i);
				var taskString = localStorage.getItem(key);
				var newTask = new Task($window.JSON.parse(taskString));
				result.push(newTask);
			}
			return result;
		};
		this.save = function(task){
			if (task.id === -1){
				task.id = new Date().getTime().toString();
			};
			localStorage.setItem(task.id, $window.JSON.stringify(task.toObject()));
			return task;
		};
		this.remove = function(task){
			localStorage.removeItem(task.id);
		}
	});*/
