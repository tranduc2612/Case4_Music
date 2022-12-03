import {Router} from "express";
import accountController from "../app/controllers/accountController";

export const accountRouter = Router();
accountRouter.post('/register',accountController.register);
accountRouter.post('/login',accountController.login);