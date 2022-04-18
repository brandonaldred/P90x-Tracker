const User = require('../models/user');
const Schedule = require('../models/schedule');
module.exports = async (req, res) => {
    let username = req.params.user;
    let user = await User.find({
        username: username
    });
    let userFirstName = user[0].firstName;
    let userCurrentWeek = user[0].progress.currentWeek;
    let userCurrentDay = user[0].progress.currentDay;
    let userPhase = user[0].progress.currentPhase;
    let userProfileImage = user[0].profileImage;
    let schedule = await Schedule.find({
        week: userCurrentWeek
    });

    const workoutIndex = userCurrentDay - 1;
    schedule = schedule[0].exercises;

    const nextWorkoutType = schedule[workoutIndex].type
    const nextWorkout = schedule[workoutIndex].workout
    res.render('index', {
        username,
        userFirstName,
        userProfileImage,
        userCurrentWeek,
        userCurrentDay,
        userPhase,
        nextWorkoutType,
        nextWorkout,
        schedule
    });
}