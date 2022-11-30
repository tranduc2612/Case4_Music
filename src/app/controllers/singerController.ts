import { Request, Response,NextFunction } from 'express';
import {Singer} from "../models/singer";
import singerService from "../service/singerService";

class SingerController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const singerList = await Singer.find({});
        return res.status(200).json(singerList);
    }

    getAll = async (req :Request, res: Response) =>{
        let singers = await singerService.findAll();
        return res.status(201).json(singers);
    }

    create = async (req :Request, res: Response) =>{
        let singer = req.body;
        singer = await singerService.save(singer);
        return res.status(201).json(singer);
    }

}

export default new SingerController();