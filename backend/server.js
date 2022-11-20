require('dotenv').config();

const express=require('express');

const mongoose=require('mongoose');

//importing routes from routes folder which we had export
const workoutRoutes=require('./routes/workouts');

//express app
const app=express();

app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//react to the request through rout handler

// app.get('/' ,(req,res)=>{
//     res.json({mssg:'Welcome to the App'});
// })

//Routes
// app.use(workoutRoutes);

//or use that Routes
app.use('/api/gym',workoutRoutes);


//listen for request
// app.listen(4000,()=>{
//     console.log("listening on port 4000!!");
// })



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");

    //listen for request
    app.listen(process.env.PORT,()=>{
        console.log("listening on port",process.env.PORT);
    })
}).catch((err)=>{
    console.log(err);
})