import express,{ Request, Response } from 'express';
import path from 'path';
import methodOverride from 'method-override';
import mongoose from "mongoose";
import cors from 'cors';
import router from './src/routes/index'
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const connectStr = process.env.DB_CONNECTION || '';


app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(methodOverride('_method'));

mongoose.connect(connectStr).then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(err.message);
})

router(app);

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
})