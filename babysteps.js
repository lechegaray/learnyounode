
var sum = 0;

for(var x = 2; x < process.argv.length; x++) {
	sum = sum + +process.argv[x];
}

console.log(sum);

