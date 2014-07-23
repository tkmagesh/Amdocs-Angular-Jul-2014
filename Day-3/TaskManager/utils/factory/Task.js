angular
	.module('utils')
	.factory('Task', function(){
		function Task(defaults){
			this.id = defaults.id || -1;
			this.name = defaults.name || "";
			this.isCompleted = defaults.isCompleted || false;
		}
		Task.prototype.toggleCompletion = function(){
			this.isCompleted = !this.isCompleted;
		}
		Task.prototype.toObject = function(){
			return {id : this.id, name : this.name, isCompleted : this.isCompleted};
		}
		return Task;
	});
