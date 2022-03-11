/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://swapi.dev/api/people/`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};
const getShow = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    const  {id}  = req.params;
  //console.log(`https://swapi.dev/api/people/?${id}`);
    let result: AxiosResponse = await axios.get(`https://swapi.dev/api/people/?${id}`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};



export default { getPosts,getShow };