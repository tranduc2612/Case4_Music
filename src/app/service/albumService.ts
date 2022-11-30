import {Album} from "../models/album";


class AlbumService{
    findAll = async () => {
        let albums = await Album.find();
        return albums;
    }

    save = async (album : any) =>{
        let albumCreate = await Album.create(album);
        return albumCreate;
    }
}
export default new AlbumService();