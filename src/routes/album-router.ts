

// @ts-ignore
import express from "express";
import albumController from "../app/controllers/albumController";

const albumRouter = express.Router();

// albumRouter.get('/',albumController.index)
albumRouter.get('/album',albumController.getAll);
albumRouter.post('/album', albumController.create)

export default albumRouter;