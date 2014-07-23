angular
		.module('taskApp')
		.controller('taskController',['$scope','Task','logger','taskStorage',
			function($scope, Task, logger, taskStorage){
				taskStorage.getAll().then(function(data){
					$scope.tasks.list = data;
				});
				$scope.tasks = {
					list : [],
					addTask : function(nt){
						taskStorage.save(new Task({name : nt})).then(function(task){
							console.log(this);
							$scope.tasks.list.push(task);
							logger.log("A new task is added.." + nt);
						});
					},
					toggle : function(task){
						task.toggleCompletion();
						//taskStorage.save(task);
					},
					getCompletedCount : function(){
						return this.list.reduce(function(seed,task){
							return task.isCompleted ? ++seed : seed;
						},0);
					}
				}
				
			}]);
	