const http = require('http');
const bl = require('bl');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let data1 = '';
let data2 = '';
let data3 = '';

http.get(url1, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data1 = data.toString();
    }))
})

http.get(url2, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data2 = data.toString();
    }))
})

http.get(url3, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        data3 = data.toString();
    }))
})

setTimeout(function () {
    console.log(data1);
    console.log(data2);
    console.log(data3);
}, 3000);