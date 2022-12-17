const mongoose=require('mongoose')
const Course = require('../models/Course.js');
const User = require('../models/user.js');

module.exports.getAllCourse = async(req,res)=>{
    try{
        const course=await Course.find().populate('createdBy');
        res.status(200).json(course);
    }catch(err){
        console.log(err.message)
        res.status(500).send("Server error")
    }
}

module.exports.createCourse = async(req,res)=>{
    try{
        const course= new Course({...req.body});
        await course.save();
        res.status(200).json("success")
    }catch(err){

        console.log(err.message)
        res.status(500).json({msg:'internal server error'})
    }
}

module.exports.enrollCourse = async(req,res) =>{
    const {id,course_id} =  req.body
    try {
        const user = await User.findById(id);
        user.enrolled.push(course_id)
        await user.save();
        res.status(200).json({msg:"Success"})
    } catch (err) {
        console.log(err.message)
            res.status(500).json({msg:'Internal server error'})
    }
}


module.exports.getEnrolledCourse = async(req,res) =>{
 const {id}=req.params
    try{
        const user=await User.findById(id).populate('enrolled')
        res.status(200).json(user);
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg:"Internal Server error"})
    }
}

