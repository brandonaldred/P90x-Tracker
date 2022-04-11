const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ( {
    muscleGroup: String,
    exercise: String,
    weight: Boolean,
    reps: Boolean,
    time: Boolean
} );

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;
