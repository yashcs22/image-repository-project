const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 9000;
const MONGODB_URI = process.env.MONGODB_URL || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dzu3t.mongodb.net/img-repo?retryWrites=true&w=majority`;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    })  
    .then(() => {console.log('Connected to MongoDB')})
    .catch(err => {console.log(err)});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});