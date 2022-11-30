

// @ts-ignore
import express from "express";
import singerController from "../app/controllers/singerController";

const singerRouter = express.Router();

// singerRouter.get('/',singerController.index)
singerRouter.get('/singer',singerController.getAll);
singerRouter.post('/singer', singerController.create)

export default singerRouter;