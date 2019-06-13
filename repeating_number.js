let repeatNumbers = (data) => {
    let result = "";
    
    for(j = 0; j < data.length; j++) {
        for (i = 0; i < data[j][1]; i++){
            result += data[j][0];
        }
        if (j < data.length -1){
            result += ", "
        }
        }
        return result;
    } 


console.log( repeatNumbers([ [1,10] ]) );
console.log( repeatNumbers([  [1,2],[2,3] ]) );
console.log( repeatNumbers( [ [10,4],[34,6], [92,2] ]) );
