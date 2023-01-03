import {Request, Response, Router} from 'express';
import songRouter from "./song-router";
import accountRouter from "./account-router";
import albumRouter from "./album-router";

const router = Router();

router.use('/list-songs',songRouter);
router.use('/list-accounts',accountRouter);
router.use('/albums',albumRouter)

export default router