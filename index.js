const express = require('express');
const app = new express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p90x', { useNewUrlParser: true } );

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const expressSession = require('express-session');
app.use(expressSession({ secret: 'keyboard cat' }));


app.listen(3000, () => {
    console.log('running');

    app.get('/', async (req, res) => {

    });

    const userSchedule = require('./controllers/schedule');
    app.get('/:user', userSchedule);

    const workout = require('./controllers/workout');
    app.get('/:user/:workoutId', workout);
});