const express = require('express');
const app = new express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p90x', { useNewUrlParser: true } );
const User = require('./models/user');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const expressSession = require('express-session');
app.use(expressSession({ secret: 'keyboard cat' }));


const schedule = [
    [ { phase: '1', workouts: [ "Chest & Back + Ab Ripper X","Plyometrics","Shoulders & Arms + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","ResRest or X Stretcht" ] } ],
    [ { phase: 1, workouts: [ "Chest & Back + Ab Ripper X","Plyometrics","Shoulders & Arms + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 1, workouts: [ "Chest & Back + Ab Ripper X","Plyometrics","Shoulders & Arms + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 1, workouts: [ "Yoga X","Core Synergistics","Kenpo X","X Stretch","Core Synergistics","Yoga X","Rest or X Stretch" ] } ],
    [ { phase: 2, workouts: [ "Chest, Shoulders & Tricepts + Ab Ripper X","Plyometrics","Back & Biceps + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 2, workouts: [ "Chest, Shoulders & Tricepts + Ab Ripper X","Plyometrics","Back & Biceps + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 2, workouts: [ "Chest, Shoulders & Tricepts + Ab Ripper X","Plyometrics","Back & Biceps + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 2, workouts: [ "Yoga X","Core Synergistics","Kenpo X","X Stretch","Core Synergistics","Yoga X","Rest or X Stretch" ] } ],
    [ { phase: 3, workouts: [ "Chest & Back + Ab Ripper X","Plyometrics","Shoulders & Arms + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","ResRest or X Stretcht" ] } ],
    [ { phase: 3, workouts: [ "Chest, Shoulders & Tricepts + Ab Ripper X","Plyometrics","Back & Biceps + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 3, workouts: [ "Chest & Back + Ab Ripper X","Plyometrics","Shoulders & Arms + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","ResRest or X Stretcht" ] } ],
    [ { phase: 3, workouts: [ "Chest, Shoulders & Tricepts + Ab Ripper X","Plyometrics","Back & Biceps + Ab Ripper X","Yoga X","Legs & Back + Ab Ripper X","Kenpo X","Rest or X Stretch" ] } ],
    [ { phase: 3, workouts: [ "Yoga X","Core Synergistics","Kenpo X","X Stretch","Core Synergistics","Yoga X","Rest or X Stretch" ] } ],
]


app.listen(3000, () => {
    console.log('running');

    app.get('/', async (req, res) => {
        const user = await User.find( { } );
        const anna = user[0];
        res.render('index', { anna, schedule });
    });
});