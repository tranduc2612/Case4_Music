
// @ts-ignore
import express from "express";
import songDetailController from "../app/controllers/songDetailController";

const songDetailRouter = express.Router();

//songRouter.get('/',songController.index)
songDetailRouter.get('/song-detail',songDetailController.getAll);
songDetailRouter.post('/song-detail', songDetailController.create)

export default songDetailRouter;