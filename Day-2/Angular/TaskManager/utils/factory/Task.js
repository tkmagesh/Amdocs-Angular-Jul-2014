angular
	.module('utils')
	.factory('Task', function(){
		function Task(name, isCompleted){
			this.name = name;
			this.isCompleted = isCompleted || false;
		}
		Task.prototype.toggleCompletion = function(){
			this.isCompleted = !this.isCompleted;
		}
		return Task;
	});
