import mongoose,{Schema, model} from "mongoose";
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

console.log("hello")

const songSchema = new Schema({
    name: { type: String, default: 'This is a name',maxLength: 255 },
    image: {type: String, default: 'Image'},
    singer:{type:Array , default: []},
    path: {type: String, default: 'Path empty'},
    album : {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc    
},{
    timestamps:true,
})

const Song = model('Song', songSchema);
export { Song };