const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const items = require('../server/item');

app.use(cors());

app.get('/items', (req, res) => {
  res.send(items)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})