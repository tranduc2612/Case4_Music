import mongoose,{Schema, model} from "mongoose";
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const musicSchema = new Schema({
    name: { type: String, default: 'This is a name',maxLength: 255 },
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc    
},{
    timestamps:true,
})

const Music = model('Music', musicSchema);
export { Music };