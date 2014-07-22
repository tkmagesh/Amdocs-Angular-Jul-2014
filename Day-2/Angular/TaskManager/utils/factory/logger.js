angular
		.module('utils')
		.factory('logger', function(){
			return {
				log : function(msg){
					console.log(msg);
				}
			}
		});
