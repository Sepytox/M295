import express from "express";

const app = express();
const session = require('express-session');
const port = 3000;



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});