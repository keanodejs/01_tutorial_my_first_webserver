var fs = require('fs');

// syncronious version
var x = fs.readFileSync('index.html', 'utf-8');
console.log(x);

// assync version
fs.readFile('index.html', 'utf-8', function(err, data){
	console.log(data);
});


console.log('Hello from end of the file');