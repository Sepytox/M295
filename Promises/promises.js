const fs = require('fs');

fs.readdir(process.argv[2])
    .then((list) => {