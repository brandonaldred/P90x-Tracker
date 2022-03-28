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
        res.render('workout', { user });
    });

    app.get('/s/:user', async (req, res) => {
        let username = req.params.user;
        let user = await User.find( { username: username } );
        userFirstName = user[0].firstName;
        userCurrentWeek = user[0].progress.currentWeek;
        userCurrentDay = user[0].progress.currentDay;
        userPhase = user[0].progress.currentPhase;
        userProfileImage = user[0].profileImage;
        let schedule = await Schedule.find ( { week: userCurrentWeek } );

        const workoutIndex = userCurrentDay -1;
        schedule = schedule[0].exercises;
        
        const nextWorkoutType = schedule[workoutIndex].type
        const nextWorkout = schedule[workoutIndex].workout
        res.render('index', {username, userFirstName, userProfileImage, userCurrentWeek, userCurrentDay, userPhase, nextWorkoutType, nextWorkout, schedule});
    });

    app.get('/w/:user/:workout', async (req, res) => {

    });
});