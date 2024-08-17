import mongoose from "mongoose";

const mongoUrl = 'mongodb://127.0.0.1:27017/TaskManagement'

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connected');
});

db.on('error', (error) => {
    console.error('Database connection error:', error);
});

db.on('disconnected', () => {
    console.log('Database disconnected');
});

export default db;
