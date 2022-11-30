import {Song} from "../models/song";

class SongService{
    findAll = async () => {
        let songs = await Song.find();
        return songs;
    }

    save = async (song : any) =>{
        let songCreate = await Song.create(song);
        return songCreate;
    }
}
export default new SongService();