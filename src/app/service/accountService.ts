import {User} from "../models/user";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../middleware/auth-middleware";


class AccountService{
    addAccount = async (account : any) =>{
        account.password = await bcrypt.hash(account.password,10);
        return await User.create(account);
    }

    getToken = async (account : any) =>{
        const accountFind = await User.findOne({phone: account.phone});
        
        if(!accountFind){
            return {
                type:"wrong-phone",
                isAccess: false,
                message: "Số điện thoại không tồn tại !"
            };
        }
        else{
            const comparePassword = await bcrypt.compare(account.password, accountFind.password);
            if(!comparePassword){
                return {
                    type:"wrong-password",
                    isAccess: false,
                    message: "Sai mật khẩu !"
                };
            }
            else{
                const payload = {
                    idUser: accountFind._id,
                    nameUser: accountFind.name,
                    avatarUser: accountFind.name,
                    phoneUser:accountFind.phone
                }

                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                })

                return {
                    isAccess: true,
                    idUser: accountFind._id,
                    message:"Đăng nhập thành công !",
                    token
                };
            }
        }
    }
    
    findUser = async (id : any) =>{
        let user = await User.findOne({_id: id});
        return user;
    }

    updateUser = async (id : any, account : any) =>{
        let userEdit = await User.findByIdAndUpdate(id,account);
        userEdit = await User.findOne({_id: id });
        return userEdit;
    }

}
export default new AccountService();