const express = require('express');
const cors = require('cors');
const app = express();
const port = 81;

const flightRouter = require('./router/flightRouter');
const bookRouter = require('./router/bookRouter');

app.use(cors());
app.use(express.json());

app.use('/flight', flightRouter);
app.use('/book', bookRouter);

app.get('/', (req, res) => {
  console.log('[GET] Success : / ');
  res.status(200).send('Welcome, States Airline!');
});

app.post('/', (req, res) => {
  console.log('[POST] Success : / ');
  res.status(200).send('Welcome, States Airline!');
});

app.listen(port, ()=>{
  console.log("[Server Start] StatesAirline");
});

module.exports = app;