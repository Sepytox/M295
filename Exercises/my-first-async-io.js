const fs = require('fs');
fs.readFile(process.argv[2], function (err, data) {
    if (err) return console.error(err);
    const str = data.toString();
    var linien = str.split('\n');
    console.log(linien.length -1);
})