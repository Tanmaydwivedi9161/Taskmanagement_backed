import express from "express";
import Task from "../models/task.models.js";
import dotenv from 'dotenv'
const router = express.Router()

router.post('/',async(req,res)=>{
    try {
        const task = req.body
        const newTask = new Task(task)
        await newTask.save()
        console.log("Task data saved")
        res.status(200).json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.get('/',async (req,res)=>{
    try {
        const data = await Task.find()
        console.log("data Fateched form Task")
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const updatedata = req.body
        
        const updatedTask = await Task.findByIdAndUpdate(id,updatedata,{new:true,runValidators:true})
        if(!updatedTask){
            res.status(404).json({error:'Task not Found'})
        }
        console.log('Task Updated');
        res.status(200).json(updatedTask)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const deleteTask  = await Task.findByIdAndDelete(id)
        if(!deleteTask){
            res.status(404).json({error:'Task Not Found'})
        }
        console.log("Task Deleted Successfully");
        res.status(200).json({message:'Task Deleted SuccessFully'})
    } catch (error) {
        console.log(error)
        res.status(200).json({error:'Internal Server Error'})
    }
})

router.get('/:status',async (req,res)=>{
    try {
        const status = req.params.status
        const statusdata = await Task.find({'status':status})
        res.status(200).json(statusdata)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
})
export default router