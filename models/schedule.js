const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema ( {
    week: [],
    exercise: [{
        type: String,
        workout: []
    }],
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;
