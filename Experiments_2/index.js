import express, { response } from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const port = 3000;
const options = {method: 'GET'};
let names = ['John', 'Mary', 'Joe', 'Jane', 'Jack', 'Jill', 'Jim', 'Jenny', 'Jeff', 'Jade'];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/now', (req, res) => {
    const tz = req.query.tz || 'Europe/Berlin';
    const time =  new Date().toLocaleString("de-CH", { timeZone: tz });
    res.send(`The time is ${time}`);
});

app.get('/', (req, res) => {
    res.sendFile('/workspaces/M295/Experiments_2/name.html');
});

app.post('/names', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.send(names);
});


app.delete('/name', multer().none(), (req, res) => {
  console.log(req.body.name);
  names = names.filter((n) => n !== req.body.name);
  console.log(names);
  res.sendStatus(204);
});

app.get('/secret2', (req, res) => {
    var auth = (req.headers['authorization']);
    if (auth == "Basic aGFja2VyOjEyMzQ=") {
        res.send("200");
    } else {
        res.send("401");
    }
});

app.get('/chuck', async (req, res) => {
    await fetch('https://api.chucknorris.io/jokes/random', options)
  .then(response => response.json())
  .then(joke => res.send(joke.value.replace("Chuck Norris", req.query.name)));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

