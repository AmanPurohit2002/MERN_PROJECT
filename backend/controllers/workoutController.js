const models=require('../models/workoutModel');
const mongoose=require('mongoose');

//get all the document
const getAll=async(req,res)=>{
    const workout22= await models.find({}).sort({createdAt:-1});
    res.status(200).json(workout22);
}

//get a single document
const getSingleWorkout=async (req,res)=>{
    console.log("enter loop");
    const { id }=req.params;

    //before finding the id we check it by mongoose
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such Workout1'});
    }

    const workout23=await models.findById(id);

    if(!workout23){
        return res.status(400).json({error:'No such Workout'});
    }

    res.status(200).json(workout23);
}


//creates a whole new document
const createNewWorkout=async(req,res)=>{
    const {title,reps,load}=req.body;

    let emptyField=[];

    if(!title){
        emptyField.push('title');
    }
    if(!reps){
        emptyField.push('reps');
    }
    if(!load){
        emptyField.push('load');
    }
    if(emptyField.length>0){
        return res.status(400).json({error:'Please Fill in all the fields' ,emptyField})
    }


    // add to the database
    try{
        const workout=await models.create({title,reps,load});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//delete a document
const deleteWorkout=async (req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such Wokout to delete'});
    }

    const workout25=await models.findOneAndDelete({ _id:id})

    if(!workout25){
        return res.status(400).json({error:'No such Wokout to delete'});
    }

    res.status(200).json(workout25);
}

//update a document
const updateWorkout=async (req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'Nothing to update'});
    }

    const workout27=await models.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout27){
        return res.status(404).json({error:'No such Wokout to delete'});
    }

    res.status(200).json(workout27);
}


module.exports={
    createNewWorkout,
    getAll,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
};