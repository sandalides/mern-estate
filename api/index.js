import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connected to the mongoDB");
    }).catch(()=>{
        console.log(err);
    })
const app = express();

app.listen(3000, () => {
            console.log('Server is running in port 3000!')
        }
    );