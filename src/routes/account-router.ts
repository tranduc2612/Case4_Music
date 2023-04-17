import {Router} from "express";
import accountController from "../app/controllers/accountController";

const accountRouter = Router();
accountRouter.get('/get-account/:id',accountController.getDataUser);
accountRouter.patch('/update-account/:id',accountController.editAccount)
accountRouter.post('/register',accountController.register);
accountRouter.post('/login',accountController.login);

export default accountRouter