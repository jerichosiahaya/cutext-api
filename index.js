const express = require('express');
const app = express();
const port = 3000;

app.get('/idr', (req, res) => {
    let output = "Still under construction. Take this slice of pizza for you. 🍕"
    res.send(output)
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});