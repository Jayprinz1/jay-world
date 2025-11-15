require('dotenv').config();

const dotenv = require('dotenv');
const  express = require('express');
const path = require ('path');

const app = express();
const PORT = process.env.PORT;

//add 1st middleway to post 
app.use(express.json());  //helps parse json body automatically


app.use((req, res, next) =>     //help logs every request
{
   console.log(`${req.method} ${req.url} ${new Date()}`);
   next();   //pass to next handler (required)
});


app.post('/user/:id', (req, res) => 
{
    res.send(`user ${req.params.id} profile`);
});


// this is a request handler
app.post('/user', (req, res) => 
{
    const {name, email} = req.body;
    if (!nmae || !email) {
        return res.status(400).json({error:"Missing data"});
    }
    res.send(`Hello, ${name}`)
});


app.get('/', (req, res) =>
{
    res.send('My Week 2 API!');
    res.sendFile(__dirname + "./index.html");
});

app.listen(PORT, () =>
{
   console.log(`Assignment app listening on port ${PORT}`);
});

