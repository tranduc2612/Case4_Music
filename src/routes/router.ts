import {Request, Response, Router} from 'express';

import songRouter from "./song-router";
import singerRouter from "./singer-router";
import albumRouter from "./album-router";
import songDetailRouter from "./songDetail-router";
import {accountRouter} from "./account-router";

export const router = Router();
router.use('/list-songs',songRouter);
router.use('/list-singers',singerRouter)
router.use('/list-albums',albumRouter)
router.use('/list-songs-detail',songDetailRouter)
router.use('/list-accounts',accountRouter);