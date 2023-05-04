import express from "express";

const app = express();
const port = 3000;
const options = {method: 'GET'};
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
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});