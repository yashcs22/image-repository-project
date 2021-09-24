const mongoose = require('mongoose');   // MongoDB abstraction layer
const Schema = mongoose.Schema;     // Mongoose schema

const ImgSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    img: {
        type: String,
        required: true
    },
    imgTitle: {
        type: String
    },
 },
    { timestamps: true }
);

module.exports = mongoose.model('Img', ImgSchema);  // Img is the name of the collection