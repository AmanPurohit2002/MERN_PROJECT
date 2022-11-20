const express=require('express');
// const workoutModel = require('../models/workoutModel');

const {
    createNewWorkout,
    getAll,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController');

//instance of Router
const router=express.Router();


//get
router.get('/',getAll)

router.get('/:id',getSingleWorkout)

//Post
router.post('/', createNewWorkout
    // res.json({mssg:'Post or create a new workout'});
)

//Post
router.post('/:id', createNewWorkout
    // res.json({mssg:'Post or create a new workout'});
)

//delete
router.delete('/:id',deleteWorkout)

//patch
router.patch('/:id',updateWorkout)

//export all the router to server.js
module.exports=router;