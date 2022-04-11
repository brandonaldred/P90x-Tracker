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
const Workout = require('./models/workout');
const Exercise = require('./models/exercise');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const expressSession = require('express-session');
app.use(expressSession({ secret: 'keyboard cat' }));


app.listen(3000, () => {
    console.log('running');

    app.get('/', async (req, res) => {

    });

    app.get('/:user', async (req, res) => {
        let username = req.params.user;
        let user = await User.find( { username: username } );
        let userFirstName = user[0].firstName;
        let userCurrentWeek = user[0].progress.currentWeek;
        let userCurrentDay = user[0].progress.currentDay;
        let userPhase = user[0].progress.currentPhase;
        let userProfileImage = user[0].profileImage;
        let schedule = await Schedule.find ( { week: userCurrentWeek } );

        const workoutIndex = userCurrentDay -1;
        schedule = schedule[0].exercises;

        const nextWorkoutType = schedule[workoutIndex].type
        const nextWorkout = schedule[workoutIndex].workout
        res.render('index', {username, userFirstName, userProfileImage, userCurrentWeek, userCurrentDay, userPhase, nextWorkoutType, nextWorkout, schedule});
    });

    app.get('/:user/:workoutId', async (req, res) => {
        let username = req.params.user;
        let user = await User.find( { username: username } );
        let userFirstName = user[0].firstName;
        let userCurrentWeek = user[0].progress.currentWeek;
        let userCurrentDay = user[0].progress.currentDay;
        let userPhase = user[0].progress.currentPhase;
        let userProfileImage = user[0].profileImage;


        let workoutId = req.params.workoutId;
        let workout = await Workout.find( { _id: workoutId } );
        let workoutName = workout[0].Workout;
        let workoutExercises = workout[0].Exercises;

        let exercise = await Exercise.find( { exercise: workoutExercises[3] } );
        console.log(exercise[0]);

        res.render('workout', {username, userFirstName, userProfileImage, userCurrentWeek, userCurrentDay, userPhase, workoutName, workoutExercises});
    });
});