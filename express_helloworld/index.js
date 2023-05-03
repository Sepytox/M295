import express from 'express';
import useragent from 'useragent';

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

app.get('/html', function(req, res) {
    res.sendFile('/workspaces/M295/express_helloworld/testdatei.html');
  });

app.get('/image', function(req, res) {
    res.sendFile('/workspaces/M295/express_helloworld/testbild.jpg');
});

app.get('/teapot', function(req, res) {
    res.status(418)
});

app.get('/user-agent', function(req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    res.send(agent.family);
});

app.get('/secret', function(req, res) {
    res.status(403).send('Access denied');
});

app.get('/xml', function(req, res) {
    res.sendFile('/workspaces/M295/express_helloworld/test.xml');
});

app.get('/json', function(req, res) {
    res.sendFile('/workspaces/M295/express_helloworld/test.json');
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})