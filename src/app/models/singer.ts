import {Schema, model} from "mongoose";


const singerSchema = new Schema({
    name: {type: String, default: 'Singer name'},
    image: {type: String, default: 'Image'},
    status: {type: String, default: 'Follow'},
    follower: {type: Number, default: 0},

    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc
},{
    timestamps:true,
})

const Singer = model('Singer', singerSchema);
export {Singer};