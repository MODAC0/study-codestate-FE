const express = require("express");
const cors = require("cors");
const app = express();
const port = 81;

const flight = require('./router/flightRouter');
const book = require('./router/bookRouter');

app.use(cors());
app.use(express.json());

app.use('/flight', flight);
app.use('/book', book);

app.get("/", (req, res) => {
    console.log(`GET : / `);
    res.send("Hello, States Airline!");
});

app.listen(port, () => {
    console.log(`Start Server "Welcome, StatesAirline!"`);
});