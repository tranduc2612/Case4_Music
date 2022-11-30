import { Request, Response,NextFunction } from 'express';
import {Album} from "../models/album";
import albumService from "../service/albumService";


class AlbumController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const albumList = await Album.find({});
        return res.status(200).json(albumList);
    }

    getAll = async (req :Request, res: Response) =>{
        let albums = await albumService.findAll();
        return res.status(201).json(albums);
    }

    create = async (req :Request, res: Response) =>{
        let album = req.body;
        album = await albumService.save(album);
        return res.status(201).json(album);
    }

}

export default new AlbumController();