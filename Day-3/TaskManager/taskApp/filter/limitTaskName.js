angular.module('taskApp')
	.filter('limitTaskName',function(){
			return function(value, acceptableLength){
				value = value || "";
				return value.length < acceptableLength ? value : value.substr(0,acceptableLength - 3) + "...";
			}
		})