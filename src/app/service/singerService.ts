import {Singer} from "../models/singer";

class SingerService{
    findAll = async () => {
        let singers = await Singer.find();
        return singers;
    }

    save = async (singer : any) =>{
        let singerCreate = await Singer.create(singer);
        return singerCreate;
    }
}
export default new SingerService();