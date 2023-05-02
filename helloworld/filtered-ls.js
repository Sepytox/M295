const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    if (err) return console.error(err);
    list.forEach(function (filename) {
        if (path.extname(filename) === `.${process.argv[3]}`)
            console.log(filename);
    })
})