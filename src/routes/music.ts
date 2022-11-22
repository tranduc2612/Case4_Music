import express from 'express';
import musicController from '../app/controllers/MusicController'
const router = express.Router();

router.get('/',musicController.index)

export default router;