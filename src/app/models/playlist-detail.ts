import mongoose,{Schema, model} from "mongoose";
import {Song} from "./song";
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const playlistDetailSchema = new Schema({
    song : {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    },
    playlist: {
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }
})

const PlaylistDetail = model('Playlist-Detail', playlistDetailSchema);
export { PlaylistDetail };