import mongoose from "mongoose"
import dotenv from 'dotenv'

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['Low','Medium','High'],
        default:'Low'
    },
    status:{
        type:String,
        enum:['To-do','Progress','Complete'],
        default:'To-do'
    }
},{timestamps:true})

const Task  = mongoose.model('Task',taskSchema)

export default Task