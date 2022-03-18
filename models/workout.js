const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ( {
    workoutName: String,
    exercises: [],
} );

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;
