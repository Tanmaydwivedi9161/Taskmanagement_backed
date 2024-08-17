import express from 'express'
import taskRouter from './routes/taskRoutes.js'
import  dotenv from'dotenv';
import db from './db.js';

import bodyParser from 'body-parser';
const PORT = process.env.PORT || 3000
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to Server")
})
app.use(bodyParser.json());

app.use('/task',taskRouter)


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
    
})