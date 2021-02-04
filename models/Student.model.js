// Define the schema for our document

// schema is a set of rules for your document
const mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({
    country: {
        type: String, 
        enum: ['Spain', 'France']
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        max: 30,
    }, 
})


// Then create a model / collection
let StudentModel = mongoose.model( 'student',  StudentSchema   )

module.exports = StudentModel