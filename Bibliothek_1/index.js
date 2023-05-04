import express from "express";

const app = express();
const port = 3000;
const options = {method: 'GET'};
let lend = [
    {
      "id": "1",
      "customer_id": "2",
      "isbn": "23423-4234234-234",
      "user": "Bambus",
      "borrowed_at": '2021-05-01',
      "returned_at": '2021-05-10'
    },
    {
      "id": "2",
      "customer_id": "3",
      "isbn": "236266-2664236-623",
      "user": "Baum",
      "borrowed_at": '2021-04-10',
      "returned_at": '2021-04-20'
    },
    {
      "id": "3",
      "customer_id": "4",
      "isbn": '5315215-5151-1525',
      "user": 'Tisch',
      "borrowed_at": '2018-05-01',
      "returned_at": '2018-05-10'
    },
];

let books = [
    {
      "isbn": "978-3-86680-192-9",
      "title": "Die Verwandlung",
      "year": 1915,
      "author": "Franz Kafka"
    },
    {
      "isbn": "978-3-462-04573-3",
      "title": "1984",
      "year": 1949,
      "author": "George Orwell"
    },
    {
      "isbn": "978-3-455-65054-3",
      "title": "Der Prozess",
      "year": 1925,
      "author": "Franz Kafka"
    },
    {
      "isbn": "978-3-596-90192-2",
      "title": "Siddhartha",
      "year": 1922,
      "author": "Hermann Hesse"
    }
  ];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
    res.send(books);
});

function remove(isbn){
    books = books.filter((b) => b.isbn !== isbn)
};

function replace(book) {
  books = books.map((b) => b.isbn === book.isbn ? book : b)
};

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find((b) => b.isbn === isbn);
    if (book) {
        res.send(book);
    } else {
        res.sendStatus(404);
    }
});

app.post('/books', (req, res) => {
    const book = req.query.book;
    books.push(book);
    res.sendStatus(201);
    console.log(book);
}); 

app.delete('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    remove(isbn);
    res.sendStatus(204);
});

app.put('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newbook = 
      {
        "isbn": isbn,
        "title": "Babus, der kleine Elefant",
        "year": 420,
        "author": "Antip K.your mom"
      };
    replace(newbook);
    res.sendStatus(201);
    res.send(books);
});

app.post('/lends', (req, res) => {
    const isbn = req.query.isbn;
    const user = req.query.user;
    const newlend =
      {
        "id": lend.length + 1,
        "customer_id": 1,
        "isbn": isbn,
        "user": user,
        "borrowed_at": new Date().toISOString().slice(0, 10),
        "returned_at": null
      };
    lend.push(newlend);
    res.sendStatus(201);
    console.log(newlend);
});

app.get('/lends', (req, res) => {
    res.send(lend);
});

app.get('/lends/:id', (req, res) => {
    const id = req.params.id;
    const lends = lend.find((b) => b.id === id);
    if (lends) {
        res.send(lends);
    } else {
        res.sendStatus(404);
    }
});

function updatelend(ulend) {
  lend = lend.map((b) => b.id === ulend.id ? ulend : b)
}

app.patch('/lends/:id', (req, res) => {
    const newborrowed_at =
      {
        "id": req.params.id,
        "customer_id": req.query.customer_id,
        "isbn": req.query.isbn,
        "user": req.query.user,
        "borrowed_at": new Date().toISOString().slice(0, 10),
        "returned_at": null
      };
    updatelend(newborrowed_at);
    res.sendStatus(200);
    res.send(lend);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});