const mongoose = require('mongoose');

// connect to your database first
// localdatabase url: mongodb://localhost:27017/
// the database we are connecting to is 'ironhack'
mongoose.connect('mongodb://localhost:27017/ironhack', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Yayyyy database connected')
        
        // delete database
       // mongoose.connection.dropDatabase();
    })
    .catch(() => {
        console.log('Something went wrong')
    })

// we require the model that was created with a certain schema    
const StudentModel = require('./models/Student.model.js')



// USING PROMISES TO HANDLE ASYNCHRONOUS EVENTS

let createPromise = StudentModel.create({name: 'Manish'})

let insertPromise = StudentModel.insertMany( [ {name: 'Jorge'}, {name:'Alvaro'}, {name: 'Luis', age: 20}  ] )

Promise.all([createPromise, insertPromise])
    .then(() => {
        console.log('All data has been inserted')
        StudentModel.updateOne( {name: 'Alvaro'} , {age: 21} )
        .then((result) => {
            console.log('Old data before Updating', result)
            
        })
        .catch(() => {
            console.log('Something went wrong while updating')
        })
    })    



// CRUD
// INSERTING 1 DATA

/*

StudentModel.insertMany( {name: 'Jorgessss'} )
    .then((response) => {
        // response will be the data that was created in the db
        console.log('Data inserted')
    })
    .catch(() => {
        console.log('Something went wrong while inserting')
    })

*/

// INSERTING MANY DATA'S
/*
StudentModel.insertMany( [ {name: 'Jorgessss'}, {name:'Alvaro'}, {name: 'Luis', age: 20}  ] )
    .then((response) => {
        // response will be array of data inserted
        console.log('Data inserted')
    })
    .catch(() => {
        console.log('Something went wrong while inserting')
    })

*/
// READ DATA
/*
StudentModel.find({name: 'Alvaro'})
    .then((result) => {
        console.log('------Result is------')
        console.log(result)
    })
    .catch(() => {
        console.log('Something went wrong while finding')
    })



StudentModel.findById('601bf9cf6ece56095c4edf0c')
    .then((result) => {
        console.log('------Result is------')
        console.log(result)
    })
    .catch(() => {
        console.log('Something went wrong while finding')
    })

*/  

// UPDATING
/*
StudentModel.update( {name: 'Alvaro'} , {age: 41} )
    .then((result) => {
        console.log('Old data before Updating', result)
    })
    .catch(() => {
        console.log('Something went wrong while updating')
    })
*/

// Deleting
/*
StudentModel.deleteOne({name: 'Luis'})
    .then((result) => {
        console.log('Old data before deleting', result)
    })
    .catch(() => {
        console.log('Something went wrong while deleting')
    })
*/
