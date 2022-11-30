import {Request, Response, Router} from 'express';

import songRouter from "./song-router";
import singerRouter from "./singer-router";
import albumRouter from "./album-router";
import songDetailRouter from "./songDetail-router";

export const router = Router();
router.use('/list-song',songRouter);
router.use('/list-singer',singerRouter)
router.use('/list-album',albumRouter)
router.use('/list-song-detail',songDetailRouter)