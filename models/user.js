const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema( {
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    profileImage: String,
    lastName: {
        type: String,
        required: true
    },
    progress: {
        startDate: Date,
        currentPhase: Number,
        currentWeek: Number,
        currentDay: Number
    },
    exercises: [],
} );

UserSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password,10, (error, hash) => {
        user.password = hash;
        next();
    } );
} );

const User = mongoose.model('User', UserSchema);
module.exports = User;