import {User} from "../models/user";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../middleware/auth-middleware";


export let ID_USER : any;
class AccountService{
    addAccount = async (account : any) =>{
        account.password = await bcrypt.hash(account.password,10);
        return await User.create(account);
    }

    getToken = async (account : any) =>{
        const accountFind = await User.findOne({name: account.name});
        if(!accountFind){
            return 'Failed';
        }
        else{
            const comparePassword = await bcrypt.compare(account.password, accountFind.password);
            if(!comparePassword){
                return 'Password is wrong';
            }
            else{
                const payload = {
                    name : accountFind.name,
                    idUser: accountFind._id
                }
                ID_USER = accountFind._id;
                return await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                });
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