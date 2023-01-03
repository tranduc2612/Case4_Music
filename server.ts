import path from 'path';
import methodOverride from 'method-override';
import mongoose from "mongoose";
 import cors from 'cors';
import router from './src/routes/router'
import express from "express";
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 5000;
const connectStr = process.env.DB_CONNECTION || '';


app.use(
    express.urlencoded({
        extended: true,
    }), 
);
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use(cors())

app.use(methodOverride('_method'));

mongoose.connect(connectStr).then((data) => { 
    console.log('Connection Success');
}).catch(() => {
    console.log('Connection failed');
})

app.use('',router)

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
})