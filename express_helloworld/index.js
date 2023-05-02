import express from 'express';

const app = express();
const port = 3010;
const names = ['Miro', 'Lambo', 'Nigola', 'LOL', 'ZLI', 'ZLI2', 'Üngbert', 'Tisch', 'Stuhlus', 'SUS', 'Babus', 'Din Dad', 'Din Vater', 'Dini mom', 'Npc', 'COM', 'adf', 'af', 'hhhh', 'gagg'];

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/now', function (req, res) {
    res.send(new Date().toISOString());
    })

app.get('/zli', function (req, res) {
    res.redirect('https://www.zli.ch');
})

app.get('/name', function (req, res) {
    res.send(names[Math.floor(Math.random() * names.length)]);
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})