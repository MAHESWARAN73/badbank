import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bank from './route.js'
import dotenv from "dotenv" 

dotenv.config()
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())



app.use(cors());
   

app.use('/api/bank',bank);

mongoose.connect('mongodb+srv://kathiresan:12345@cluster0.bxeirgh.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('db connecmajorityted as bank'))
.catch((e)=>console.log(e.message))

const port=process.env.PORT||9000

app.listen(port,()=>{console.log("server is running on port 9000")})