var products = [
	{id :8, name :"Pen", cost :30, units :10, category :2},
	{id :3, name :"Hen", cost :60, units :70, category :1},
	{id :7, name :"Ten", cost :90, units :30, category :2},
	{id :2, name :"Den", cost :10, units :50, category :1},
	{id :9, name :"Len", cost :50, units :80, category :2},
	{id :6, name :"Zen", cost :20, units :30, category :1}
]

//filter

function sort(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

/*compareFn - > returns
	-1 if l < r
	1 if l > r
	0 if l == r
*/
function sort(list,compareFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (compareFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

var compareProductsByValue = function(p1, p2){
   var p1Value = p1.cost * p1.units,
       p2Value = p2.cost * p2.units;
   if (p1Value < p2Value) return -1;
   if (p1Value > p2Value) return 1;
   return 0;
}

function filter(list,criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]))
			result.push(list[i]);
	return result;
}
var costlyProductCriteria = function(p){
    return p.cost > 50;
}

var costlyProducts = filter(products,costlyProductCriteria);

function groupBy(list,keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

function keySelectorByCost(p){
	return p.cost > 50 ? "costly" : "affordable";
}

var productsByCost = groupBy(products,keySelectorByCost);

