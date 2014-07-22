function Employee(id,name,salary){
   if (this.constructor !== arguments.callee){
       return new Employee(id,name,salary);
   }
   this.id = id;
   this.name = name;
   this.salary = salary;
}

/*
Convert the above Employee constructor function as per the below guidlines
Expose accessor methods that does:
	1. id should be readonly
	2. name cannot be an empty string
	3. salary cannot be assigned a value less than the current salary
*/

function Employee(id,name,salary){
	var _id = id,
		_name,
		_salary = 0;

	this.id = function(){
		return _id;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};
	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > _salary) _salary = val;
	};
	this.name(name);
	this.salary(salary);
}