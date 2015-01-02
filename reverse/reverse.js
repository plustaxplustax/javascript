function reverseArray(array){
	var newArray = [];
	for (var i = array.length -1, j = 0; i >= 0; i--,j++){
		newArray[j]= array[i];
	}
	return newArray;
}
var array = [1,2,3];

console.log(reverseArray(array));
