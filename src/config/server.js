const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');



const app = express();

/* settings */
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

/* middleware */
app.use(bodyParser.urlencoded({extended: false}));

/* public */
app.use(express.static(path.join(__dirname, '../public/img')));

module.exports = app;

