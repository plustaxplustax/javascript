function range(start,end){
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
}
function sum(result) {
	var tmp = 0;
	for (var i = 0; i < result.length; i++) {
		tmp = tmp + result[i];
	}
	return tmp;
}
console.log(sum(range(1,10) ) );
