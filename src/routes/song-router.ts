
import songController from '../app/controllers/songController'
// @ts-ignore
import express from "express";

const songRouter = express.Router();

songRouter.get('/song',songController.getAll);
songRouter.post('/song', songController.create)

export default songRouter;