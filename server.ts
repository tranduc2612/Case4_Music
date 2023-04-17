import path from 'path';
import methodOverride from 'method-override';
import mongoose from "mongoose";
 import cors from 'cors';
import router from './src/routes/router'
import express from "express";
import {Song} from "./src/app/models/song";
import {User} from "./src/app/models/user";
import bodyParser from 'body-parser';
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

mongoose.connect(connectStr,{dbName: 'player'}).then((data) => {
    // const arr = [
    //     {
    //         "name": "Cứ Chill Thôi",
    //         "singer": ["Chillies", "Suni Hạ Linh", "Rhymastic"],
    //         "path": "../../public/songs/song1.mp3",
    //         "image": "../../public/img/music/listSong1/song1.jpg"
    //     },
    //     {
    //         "name": "Crush",
    //         "singer": ["WN", "Vani", "An An"],
    //         "path": "../../public/songs/song2.mp3",
    //         "image": "../../public/img/music/listSong1/song2.jpg"
    //     },
    //     {
    //         "name": "Vô Tình",
    //         "singer": ["Xesi", "Hoaprox"],
    //         "path": "../../public/songs/song3.mp3",
    //         "image": "../../public/img/music/listSong1/song3.jpg"
    //     },
    //     {
    //         "name": "Because I'm Stupid",
    //         "singer": ["SS501"],
    //         "path": "../../public/songs/song4.flac",
    //         "image": "../../public/img/music/listSong1/song4.jpg"
    //     },
    //     {
    //         "name": "Mama Boy",
    //         "singer": ["AMEE"],
    //         "path": "../../public/songs/song5.mp3",
    //         "image": "../../public/img/music/listSong1/song5.jpg"
    //     },
    //     {
    //         "name": "Cửu Vĩ Hồ",
    //         "singer": ["Yun", "Dr A"],
    //         "path": "../../public/songs/song6.mp3",
    //         "image": "../../public/img/music/listSong1/song6.jpg"
    //     },
    //     {
    //         "name": "Anh Đã Quen Với Cô Đơn",
    //         "singer": ["Soobin Hoàng Sơn"],
    //         "path": "../../public/songs/song7.mp3",
    //         "image": "../../public/img/music/listSong1/song7.jpg"
    //     },
    //     {
    //         "name": "Túy Âm",
    //         "singer": ["Xesi", "Masew", "Nhật Nguyễn"],
    //         "path": "../../public/songs/song8.mp3",
    //         "image": "../../public/img/music/listSong1/song8.jpg"
    //     },
    //     {
    //         "name": "Kém Duyên",
    //         "singer": ["Rum", "NIT", "Masew"],
    //         "path": "../../public/songs/song9.mp3",
    //         "image": "../../public/img/music/listSong1/song9.jpg"
    //     },
    //     {
    //         "name": "Tình Bạn Diệu Kì",
    //         "singer": ["AMEE", "Ricky Star", "Lăng LD"],
    //         "path": "../../public/songs/song10.flac",
    //         "image": "../../public/img/music/listSong1/song10.jpg"
    //     },
    //     {
    //         "name": "Em Có Nghe",
    //         "singer": ["Kha"],
    //         "path": "../../public/songs/song11.mp3",
    //         "image": "../../public/img/music/listSong1/song11.jpg"
    //     },
    //     {
    //         "name": "Lạc Trôi",
    //         "singer": ["Sơn Tùng M-TP"],
    //         "path": "../../public/songs/song12.mp3",
    //         "image": "../../public/img/music/listSong1/song12.jpg"
    //     },
    //     {
    //         "name": "Một Năm Mới Bình An",
    //         "singer": ["Sơn Tùng MTP"],
    //         "path": "../../public/songs/song13.mp3",
    //         "image": "../../public/img/music/listSong1/song13.jpg"
    //     },
    //     {
    //         "name": "Hongkong1 (Official Version)",
    //         "singer": ["Nguyễn Trọng Tài", "San Ji", "Double X"],
    //         "path": "../../public/songs/song14.mp3",
    //         "image": "../../public/img/music/listSong1/song14.jpg"
    //     },
    //     {
    //         "name": "Gác Lại Âu Lo",
    //         "singer": ["Da LAB", "Miu Lê"],
    //         "path": "../../public/songs/song15.mp3",
    //         "image": "../../public/img/music/listSong1/song15.jpg"
    //     },
    //     {
    //         "name": "Chạy Ngay Đi",
    //         "singer": ["Sơn Tùng MTP"],
    //         "path": "../../public/songs/song16.mp3",
    //         "image": "../../public/img/music/listSong1/song16.jpg"
    //     },
    //     {
    //         "name": "Cùng Anh",
    //         "singer": ["Ngọc Dolil", "Hagi", "STee"],
    //         "path": "../../public/songs/song17.mp3",
    //         "image": "../../public/img/music/listSong1/song17.jpg"
    //     },
    //     {
    //         "name": "Hãy Trao Cho Anh",
    //         "singer": ["Sơn Tùng MTP"],
    //         "path": "../../public/songs/song18.mp3",
    //         "image": "../../public/img/music/listSong1/song18.jpg"
    //     },
    //     {
    //         "name": "Tộc Ca",
    //         "singer": ["Phúc Du", "SONBEAT"],
    //         "path": "../../public/songs/song19.mp3",
    //         "image": "../../public/img/music/listSong1/song19.jpg"
    //     },
    //     {
    //         "name": "Thiên Lý Ơi",
    //         "singer": ["Jack", "Bikay"],
    //         "path": "../../public/songs/song20.mp3",
    //         "image": "../../public/img/music/listSong1/song20.jpg"
    //     },
    //     {
    //         "name": "Phố Đã Lên Đèn",
    //         "singer": ["Phố Đã Lên Đèn"],
    //         "path": "../../public/songs/song21.mp3",
    //         "image": "../../public/img/music/listSong1/song21.jpg"
    //     }
    // ]
    // arr.forEach(async (e)=>{
    //     // console.log(e)
    //     const he = await Song.create(e);
    //     console.log(he);
    // })
    // const newUser = {
    //     name: "trần Minh Đức",
    //     phone: "0367218700",
    //     password: "123456",
    //     avatar:"../../public/img/singer/artist1.jpg"
    // }
    // User.create(newUser)
    console.log('Connection Success');
}).catch(() => {
    console.log('Connection failed');
})

app.use('',router)

app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
})