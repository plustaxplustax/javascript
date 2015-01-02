function reverseArray(array){
	var newArray = [];
	for (var i = array.length, j = 0; i >= 0; i--,j++){
		newArray[j]= array[i];
	}
	return newArray;
}
var array = [1,2,3];

console.log(reverseArray(array));
// my output [undefined, 3, 2, 1]
