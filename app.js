const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AccountsRoute = require('./routes/accounts');

const app = express();
require('dotenv/config');

app.use(bodyParser.json());
app.use('/accounts',AccountsRoute);


// DB CONNECTION
mongoose.connect("mongodb+srv://ExternalAPI:KVfwNTenVtGIWoUC@cluster0.klr51lu.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to DB..!');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });




app.listen(3000);