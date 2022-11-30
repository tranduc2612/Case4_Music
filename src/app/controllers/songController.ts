import { Request, Response,NextFunction } from 'express';
import {Song} from '../models/song'
import songService from "../service/songService";

class SongController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const songList = await Song.find({});
        return res.status(200).json(songList);
    }

    getAll = async (req :Request, res: Response) =>{
        let songs = await songService.findAll();
        return res.status(201).json(songs);
    }

    create = async (req :Request, res: Response) =>{
        let song = req.body;
        song = await songService.save(song);
        return res.status(201).json(song);
    }

}

export default new SongController();