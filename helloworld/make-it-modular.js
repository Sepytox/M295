const mymodule = require('./mymodule.js');
const dir = process.argv[2];
const ext = process.argv[3];
mymodule(dir, ext, function (err, list) {
    if (err) return console.error(err);
    list.forEach(function (filename) {
        console.log(filename);
    })
})