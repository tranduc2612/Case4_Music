import { Request, Response,NextFunction } from 'express';
import {Music} from '../models/Music'

class MusicController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const musicList = await Music.find({});
        return res.status(200).json(musicList);
    }
}

export default new MusicController();