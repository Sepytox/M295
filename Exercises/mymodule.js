const fs = require('fs');
const path = require('path');
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        const filteredList = list.filter(function (filename) {
            return path.extname(filename) === `.${ext}`;
        })
        callback(null, filteredList);
    })
}