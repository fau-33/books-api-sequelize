const express = require('express');
const userBookController = require('./controllers/userBook.controller');

const app = express();

app.use(express.json());

app.get('/userbooks/:id', userBookController.getUsersBooksId);

module.exports = app;

