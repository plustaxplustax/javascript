function reverseArray(array){
	var newArray = [];
	for (var i = array.length -1, j = 0; i >= 0; i--,j++){
		newArray[j]= array[i];
	}
	return newArray;
}
var array = [1,2,3];

console.log(reverseArray(array));

function reverseArrayInPlace(array){
	var tmp = [];
	for (var i = array.length -1, j = 0; i >= 0; i--,j++){
		tmp[j]= array[i];
	}
	array = tmp.slice();
	return array;
}
var array = [5,4,3,2,1];
console.log(reverseArrayInPlace(array));

/*better algorithm
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}*/
