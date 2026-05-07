const express = require('express');
const app = express();
const app = require('../app');

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline Working!');
});

module.exports = app;