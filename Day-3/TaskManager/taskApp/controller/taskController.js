angular
		.module('taskApp')
		.controller('taskController',function($scope, Task, logger, taskStorage){
			taskStorage.getAll().success(function(data){
				$scope.tasks.list = data;
			});
			$scope.tasks = {
				list : [],
				addTask : function(nt){
					this.list.push(taskStorage.save(new Task({name : nt})))
					logger.log("A new task is added.." + nt);
				},
				toggle : function(task){
					task.toggleCompletion();
					taskStorage.save(task);
				},
				getCompletedCount : function(){
					return this.list.reduce(function(seed,task){
						return task.isCompleted ? ++seed : seed;
					},0);
				}
			}
			
		});
	