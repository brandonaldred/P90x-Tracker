const express = require('express');
const app = new express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p90x', { useNewUrlParser: true } );
const User = require('./models/user');
const Schedule = require('./models/schedule');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const expressSession = require('express-session');
app.use(expressSession({ secret: 'keyboard cat' }));


app.listen(3000, () => {
    console.log('running');

    app.get('/', async (req, res) => {
        const user = await User.find( { username: 'annasalinthone' } );
        res.render('index', {user});
    });
    app.get('/u/:user', async (req, res) => {
        const user = await User.find( { username: req.params.user } );
        const schedule = await Schedule.find ( { week: user[0].progress.currentWeek } );
        function findPhase(currentWeek) {
            for (let i = 0; i < schedule.length; i++) {
                let index = schedule[i].week.findIndex(week => week === currentWeek);
                return index;
            };
        }

        const scheduleObject = schedule[0];
        res.render('index', {user, scheduleObject});
    });
});