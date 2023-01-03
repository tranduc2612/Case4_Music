import {Request, Response} from "express";
import accountService from "../service/accountService";
import jwt from 'jsonwebtoken'
class AccountController{
    register = async (req: Request, res: Response) =>{
        let account = req.body;
        account = await accountService.addAccount(account);
        return res.status(201).json(account);
    }

    login = async (req: Request, res: Response) =>{
        let account = req.body;
        let data = await accountService.getToken(account);
        return res.status(200).json({
            data
        })
    }

    getDataUser = async (req: Request, res: Response) =>{
        const id = req.params.id;
        const account = await accountService.findUser(id);
        return res.status(201).json(account);
    }

    editAccount = async (req: Request, res: Response) => {
        let id = req.params.id;
        let account = req.body;
        account = await accountService.updateUser(id , account);
        return res.status(201).json(account);
    }
}
export default new AccountController();