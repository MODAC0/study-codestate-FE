const express = require("express");
const router = require("./Routes");
const cors = require("cors");
const morgan = require("morgan");
const parser = require("body-parser");
const controller = require("./controllers");

const app = express();
const port = 4000;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(parser.json());
app.use("/users", router);
app.get("/main", controller.items.get);
module.exports = app.listen(port, () => {
  console.log(`🚀 Server is starting on ${port}`);
});
