
const User = require('../models/user');
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = async (req, res) => {
    let username = req.params.user;
    let user = await User.find({
        username: username
    });
    console.log(user);
    let userFirstName = user[0].firstName;
    let userCurrentWeek = user[0].progress.currentWeek;
    let userCurrentDay = user[0].progress.currentDay;
    let userPhase = user[0].progress.currentPhase;
    let userProfileImage = user[0].profileImage;


    let workoutId = req.params.workoutId;
    let workout = await Workout.find({
        _id: workoutId
    });
    let workoutName = workout[0].Workout;
    let workoutExercisesList = workout[0].Exercises;
    let exercises = await Exercise.find({
        exercise: workoutExercisesList
    });

    res.render('workout', {
        username,
        userFirstName,
        userProfileImage,
        userCurrentWeek,
        userCurrentDay,
        userPhase,
        workoutName,
        exercises
    });
}