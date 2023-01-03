import {Schema, model} from "mongoose";


const albumSchema = new Schema({
    name: {type: String, default: 'Album name'},
    image: {type: String, default: 'Image'},
    singer: { type: Schema.Types.ObjectId, ref: 'Singer' },
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc
},{
    timestamps:true,
})

const Album = model('Album', albumSchema);
export {Album};