import { Request, Response,NextFunction } from 'express';
import {SongDetail} from "../models/song-detail";
import songService from "../service/songService";
import songDetailService from "../service/songDetailService";

class SongDetailController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const songDetailList = await SongDetail.find({});
        return res.status(200).json(songDetailList);
    }

    getAll = async (req :Request, res: Response) =>{
        let songDetails = await songDetailService.findAll()
        return res.status(201).json(songDetails);
    }

    create = async (req :Request, res: Response) =>{
        let songDetail = req.body;
        songDetail = await songDetailService.save(songDetail);
        return res.status(201).json(songDetail);
    }

}

export default new SongDetailController();