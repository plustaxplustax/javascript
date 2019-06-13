"use strict"
let conditionalSum = (values, condition) => {
    let result = 0;
    let remainder;

    if (condition == "odd") {
        remainder = 1;
    }
    else {
        remainder = 0;
    }

    for (var i=0; i < values.length; i++) {
        if (values[i] % 2  === remainder) {
            result += values[i];
        }
    }
    return result;
};
 //testing case 
console.log ( conditionalSum( [1,2,3,4,5], "even" ) ); //==> 6
console.log ( conditionalSum( [1,2,3,4,5], "odd" ) ); //--> 9
console.log ( conditionalSum( [13,88,12,44,99], "even" ) ); //--> 144
console.log ( conditionalSum( [], "0dd" ) ); //--> 0
