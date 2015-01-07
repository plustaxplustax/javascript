function mergeSort(array){
    //argument checking
    if (array.constructor !== Array ) {
        return false;
    }
    //if the array is of length 0 or 1 there is no need to sort
    if (array.length <= 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0,middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var sortedArray = [];
    var i;
    var j;
    for  (i = 0, j = 0; i < left.length && j < right.length;){
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        }
        else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}
var testArray = [5,2,2];
var integer = 1;
console.log(mergeSort(testArray));
console.log(mergeSort(integer));
