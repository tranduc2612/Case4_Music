import {SongDetail} from "../models/song-detail";

class SongDetailService{
    findAll = async () => {
        let songs = await SongDetail.find().populate('song').populate('singer');
        return songs;
    }

    save = async (song : any) =>{
        let songCreate = await SongDetail.create(song);
        return songCreate;
    }
}
export default new SongDetailService();