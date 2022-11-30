import {Schema, model} from "mongoose";


const playlistSchema = new Schema({
    name: {type: String, default: 'Playlist name'},
    image: {type: String, default: 'Image'},
    creator: {type: String, default: 'Creator'},
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc
},{
    timestamps:true,
})

const Playlist = model('Playlist', playlistSchema);
export {Playlist};