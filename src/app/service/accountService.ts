import {User} from "../models/user";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../middleware/auth-middleware";


class AccountService{
    addAccount = async (account : any) =>{
        const accountFind = await User.findOne({phone: account.phone});
        if(accountFind){
            return {
                type:"Error",
                message: "Số điện thoại đã tồn tại !"
            }
        }
        account.password = await bcrypt.hash(account.password,10);
        const newUser = await User.create(account);

        const payload = {
            idUser: newUser._id,
            nameUser: newUser.name,
            avatarUser: newUser.avatar,
            phoneUser:newUser.phone
        }

        const token = await jwt.sign(payload, SECRET_KEY, {
            expiresIn: 36000
        })

        return {
            isAccess: true,
            avatar: payload.avatarUser,
            name: payload.nameUser,
            message:"Đăng kí thành công !",
            token
        };
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
                    avatarUser: accountFind.avatar,
                    phoneUser:accountFind.phone
                }

                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                })

                return {
                    isAccess: true,
                    avatar: payload.avatarUser,
                    name: payload.nameUser,
                    idUser:payload.idUser,
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
        let user = await User.findOne({_id: id});
        if(user != null){
            const comparePassword = await bcrypt.compare(account.password, user.password);
            if(comparePassword){
                account.password = await bcrypt.hash(account.password,10);
                let userEdit = await User.findByIdAndUpdate(id,account);
                userEdit = await User.findOne({_id: id });
                return {
                    type: "Success",
                    message: "Cập nhật thành công !",
                    ...userEdit
                };
            }else{
                return{
                    type: "Error",
                    message: "Mật khẩu không khớp !"
                }
            }
        }

        return{
            type: "Error",
            message: "Người dùng không tồn tại"
        }
        
        
    }

}
export default new AccountService();