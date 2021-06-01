const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const flightRouter = require('./router/flightRouter');
const bookRouter = require('./router/bookRouter');
const airportRouter = require('./router/airportRouter');

app.use(cors());
app.use(express.json());

app.use('/flight', flightRouter);
app.use('/book', bookRouter);
app.use('/airport', airportRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome, States Airline!');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

app.listen(port, () => {
  console.log(`[RUN] StatesAirline Server... | http://localhost:${port}`);
});

module.exports = app;
