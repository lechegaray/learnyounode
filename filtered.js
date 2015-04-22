var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, function(err,files) {

	if (err) return console.error(err);

	for (var x = 0; x < files.length; x++) {
		if (files[x].indexOf('.') === -1) {
			break;
		}
		else if (files[x].split('.').pop() === extension) {
			console.log(files[x]);
		}
	}
})


    // var fs = require('fs')
    // var path = require('path')
    
    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })

