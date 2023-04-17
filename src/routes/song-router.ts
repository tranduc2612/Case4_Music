
import songController from '../app/controllers/songController'
// @ts-ignore
import express from "express";
import {auth} from "../app/middleware/auth-middleware"

const songRouter = express.Router();

songRouter.get('/song',songController.getAll);
songRouter.post('/song', songController.create);

export default songRouter;