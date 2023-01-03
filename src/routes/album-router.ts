import {Router} from "express";
import albumController from "../app/controllers/albumController";

const albumRouter = Router();
albumRouter.post('/create',albumController.create);
albumRouter.get('/get',albumController.getAll);

export default albumRouter