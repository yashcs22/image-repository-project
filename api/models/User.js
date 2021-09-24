const mongoose = require('mongoose');   // MongoDB abstraction layer
const Schema = mongoose.Schema;     // Schema constructor

const UserSchema = new Schema({            
        username: { 
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        profilePicture: {
            type: String,
            default: "",
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
    },
    {timestamps: true}
);      

module.exports = mongoose.model('User', UserSchema); // User is the name of the collection in the database