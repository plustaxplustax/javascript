var column = 1;
var row = 1;
var s = "#";
for (; column <= 7; column += 1) {
	for (; row <= column; row += 1) {
		console.log(s);
	}
	s+= '#';
}