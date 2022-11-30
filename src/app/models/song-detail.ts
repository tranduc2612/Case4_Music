import mongoose,{Schema, model} from "mongoose";
import {Song} from "./song";
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const songDetailSchema = new Schema({
    song : {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    },
    singer: {
        type: Schema.Types.ObjectId,
        ref: 'Singer'
    }
})

const SongDetail = model('Song-Detail', songDetailSchema);
export { SongDetail };