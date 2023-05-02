const fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
var linien = str.split('\n');
console.log(linien.length -1);