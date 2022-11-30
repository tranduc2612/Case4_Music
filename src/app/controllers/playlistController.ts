import { Request, Response,NextFunction } from 'express';
import {Playlist} from "../models/playlist";
import playlistService from "../service/playlistService";



class PlaylistController {
    //[GET] /
    index = async (req: Request,res: Response,next: NextFunction)=>{
        const playlistList = await Playlist.find({});
        return res.status(200).json(playlistList);
    }

    getAll = async (req :Request, res: Response) =>{
        let playlists = await playlistService.findAll();
        return res.status(201).json(playlists);
    }

    create = async (req :Request, res: Response) =>{
        let playlist = req.body;
        playlist = await playlistService.save(playlist);
        return res.status(201).json(playlist);
    }

}

export default new PlaylistController();