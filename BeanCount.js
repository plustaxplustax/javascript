function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted = counted + 1;
      var str1 = "The " + string + " contains " + ch + " at position " + i + ",";
      var str2 = " and the total number of " + ch + " is " + counted + ".";
      var result = str1.concat(str2); 
  return result;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("ABC"));

console.log(countChar("kakkerlak", "k"));

