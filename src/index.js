// index.js
console.log("Hello, World!");

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my text editor!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});