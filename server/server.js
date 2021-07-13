import express from 'express'
import connectDB from './db.js';
import data from  './data.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes.js';

// alok1234
const app=express();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

//handle signup
app.use('/',router)



const PORT=8000;

connectDB();

app.listen(PORT,()=>{
    console.log(`server is runnig on ${PORT}`);
})

//send data to the database after connection and port running
data();