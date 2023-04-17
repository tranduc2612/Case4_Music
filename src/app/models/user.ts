import mongoose,{Schema, model} from "mongoose";
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const userSchema = new Schema({
    name: { type: String, default: 'username',maxLength: 255 },
    phone: {type: String, default: 'phone'},
    avatar: {type: String, default: '../../public/img/singer/artist1.jpg'},
    password: {type: String, default: 'password'},
    slug: { type: String, slug:"name", unique: true },
    // slug sẽ lấy thằng name biến về dạng không dấu và cách nhau bởi dấu gạch ngang ví dụ: Trần Minh Đức => Tran-Minh-Duc
},{
    timestamps:true,
})

const User = model('User', userSchema);
export { User };