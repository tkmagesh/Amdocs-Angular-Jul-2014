angular
		.module('taskApp')
		.controller('taskController',function($scope, Task, logger){
			$scope.tasks = {
				list : [
					new Task('Task - 1', false),
					new Task('Task - 2', true),
					new Task('Task - 3', false),
				],
				addTask : function(nt){
					this.list.push(new Task(nt));
					logger.log("A new task is added.." + nt);
				},
				getCompletedCount : function(){
					return this.list.reduce(function(seed,task){
						return task.isCompleted ? ++seed : seed;
					},0);
				}
			}
			
		});
	