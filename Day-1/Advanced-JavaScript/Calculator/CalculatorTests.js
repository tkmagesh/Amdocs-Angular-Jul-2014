window.addEventListener("DOMContentLoaded",runTests);
function runTests(){
	test("Should be able to add two numbers", function(){
		//Arrange
		var n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add two numbers in string format", function(){
		//Arrange
		var n1 = "10",
			n2 = "20",
			expectedResult = 30;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to treat non numeric strings as zero", function(){
		//Arrange
		var n1 = 10,
			n2 = "abc",
			expectedResult = 10;

		//Act
		var result = add(n1,n2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add functions returning numbers", function(){
		//Arrange
		var f1 = function(){ return 10},
			f2 = function(){ return 20},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10"},
			f2 = function(){ return "20"},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});	
	test("Should be able to add only one number", function(){
		//Arrange
		var n1 = 10,
			expectedResult = 10;

		//Act
		var result = add(n1);

		//Assert
		return expectedResult === result;
	});
	test("Should return zero when added with no arguments", function(){
		//Arrange
		var expectedResult = 0;

		//Act
		var result = add();

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add variable length of numbers", function(){
		//Arrange
		var expectedResult = 100;

		//Act
		var result = add(10,20,30,40);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add arrays of numbers", function(){
		//Arrange
		var numbers1 = [10,20],
			numbers2 = [30,40],
			expectedResult = 100;

		//Act
		var result = add(numbers1, numbers2);

		//Assert
		return expectedResult === result;
	});
	test("Should be able to add functions returning numbers in string format", function(){
		//Arrange
		var f1 = function(){ return "10"},
			f2 = function(){ return "20"},
			expectedResult = 30;

		//Act
		var result = add(f1,f2);

		//Assert
		return expectedResult === result;
	});	
	test("Should be able to add an array functions returning functions returing numbers in string format", function(){
		//Arrange
		var f1 = function(){ return function(){ return [10,20]}},
			f2 = function(){ return function(){ return [30,40]}},
			expectedResult = 100;

		//Act
		var result = add([f1,f2]);

		//Assert
		return expectedResult === result;
	});	
	test("Should be able to add a nested array", function(){
		//Arrange
		var numbers  = [10,[20,[30,[40]]]];
			expectedResult = 100;

		//Act
		var result = add(numbers);

		//Assert
		return expectedResult === result;
	});		
	
}