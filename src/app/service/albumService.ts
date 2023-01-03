import {Album} from "../models/album";


class AlbumService{
    async findAll() {
        let albums = await Album.find({}).populate("singer");
        return albums;
    }

    save = async (album : any) =>{
        let albumCreate = await Album.create(album);
        return albumCreate;
        // console.log(album);
        
    }
}
export default new AlbumService();