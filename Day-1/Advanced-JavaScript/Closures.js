create an object (how?) that exhibits the following behavior

var obj = /***/;

obj.up(); //=> 1
obj.up(); //=> 2
obj.up(); //=> 3
obj.up(); //=> 4

obj.down(); //=> 3
obj.down(); //=> 2
obj.down(); //=> 1
obj.down(); //=> 0
obj.down(); //=> -1

var spinner = (function (){
	var count = 0;
	function increment(){
		return ++count;
	}
	function decrement(){
		return --count;
	}
	return {
		up : increment,
		down : decrement
	}
})();

var spinner = (function (){
	var count = 0;
	return {
		up : function(){ return ++count; },
		down : function(){ return --count; }
	}
})();

create funtion to check whether the given is prime number or not!
the function should be able to cache the results and return from the cache 
if the given number is alredy checked

var isPrime = (function(){
	function checkPrime(n){
		console.log("Prime check being done...");
		if (n <= 3) return true;
		for(var i=2;i<= (n/2);i++)
			if (n % i === 0) return false;
		return true;
	}
	var cache = {};
	return function(n){
		cache[n] = (typeof cache[n] !== "undefined" ? cache[n] : checkPrime(n));
		return cache[n];
	}
})()