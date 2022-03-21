const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema ( {
    week: [],
    exercises: [],
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;
