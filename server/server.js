const express = require('express');
const app = express();
const register = require('./routes/register');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // this uses default values
app.use('/', register);
app.use('/api/register', register);

var server = app.listen(3000, () => { console.log('App listening on ', server.address().port) });


module.exports = app;

