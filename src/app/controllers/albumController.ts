import { Request, Response,NextFunction } from 'express';
import {Album} from "../models/album";
import albumService from "../service/albumService";
import {Singer} from "../models/singer"

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
        // let album = req.body;
        // const data = {
        //     name: "Năm mới 1",
        //     singer: Singer.findOne({_id:"63aa4a59144af47acb712805"})
        // }

        let data = await Singer.findOne({_id:"63aa4a59144af47acb712805"});

        console.log(data);
        
        // console.log(data);
        
        
        // const album = await albumService.save(data);
        return res.status(201).json({});
    }

}

export default new AlbumController();