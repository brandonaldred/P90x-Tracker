const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.connect('mongodb://localhost/p90x', { useNewUrlParser: true } );

User.create ({
    username: 'annasalinthone',
    password: 'bu2yb0dy',
    firstName: 'Anna',
    lastName: 'Aldred',
    progress: { 
        startDate: new Date(),
        currentPhase: 1, 
        currentWeek: 1,
        currentDay: 1
    },
    exercises: []
}, (error, user) => { console.log(error,  user) } );