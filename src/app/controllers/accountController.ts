import {Request, Response} from "express";
import accountService, {ID_USER} from "../service/accountService";

class AccountController{
    register = async (req: Request, res: Response) =>{
        let account = req.body;
        account = await accountService.addAccount(account);
        return res.status(201).json(account);
    }

    login = async (req: Request, res: Response) =>{
        let account = req.body;
        let token = await accountService.getToken(account);
        return res.status(200).json({
            idUser: ID_USER,
            token: token
        })
    }
    findAccount = async (req: Request, res: Response) => {
        let id = req.params.id;
        let account = await accountService.findUser(id);
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