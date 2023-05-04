import express from "express";
import session from "express-session";

const app = express();
const port = 2000;

app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false, 
    saveUninitialized: false,
    cookies: {},
}));

const Admincredentials = {    
    email: 'antip', 
    password: '1234' 
};

app.post('/login',(req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    
    if (email == Admincredentials.email && password == Admincredentials.password) {
        return res.status(200).send('Login successful');
    } else {
    return res.status(401).send('Login failed!');
    }
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});