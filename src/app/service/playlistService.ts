import {Playlist} from "../models/playlist";


class PlaylistService{
    findAll = async () => {
        let playlists = await Playlist.find();
        return playlists;
    }

    save = async (playlist : any) =>{
        let playlistCreate = await Playlist.create(playlist);
        return playlistCreate;
    }
}
export default new PlaylistService();