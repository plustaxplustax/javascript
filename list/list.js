function arrayToList(array) {
    var list = null;
    for (var i = array.length -1; i >= 0; i--){
        list = { value: array[i], rest: list};
    }
    return list
}
console.log(arrayToList([30, 20, 10]));

function listToArray(list){
    var array =[];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;

}
console.log(listToArray(arrayToList([5, 4, 3])));

function prepend(element,list){
    return {value: element, rest: list};
}
console.log(prepend(10, prepend(20, null)));

function nth(location,list){
    if (!list){
        return undefined;
    }
    else if (location == 0) {
        return list.value;
    }
    else return nth(location -1,list.rest);
}
console.log(nth(1,arrayToList([10, 20, 30])));
