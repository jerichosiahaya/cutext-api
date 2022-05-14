const express = require('express');
const app = express();
const port = 3000;
const idr = require("./idr/index");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/idr", idr);

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});