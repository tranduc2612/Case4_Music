import { Request, Response } from 'express';
import musicRouter from './music'

export default function route(app: any){
    app.use('/list-music',musicRouter);
}       