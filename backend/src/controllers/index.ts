import { Request, Response } from "express";
import { saveMessage, getUrl } from "../services";
import AxiosError from 'axios';

export const save = async (req: Request, res: Response) => {
  const message = req.body.data;
  const result = await saveMessage(message);
  res.json(result.url)
};

export const get = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getUrl(id);
    res.json(result.msg);
}

// class UrlController {
//   public urlService = new UrlService();

//   public saveMessage = async (req: Request, res: Response) => {
//     console.log(req.body);
//     const message = req.body.data;
//     const result = await this.urlService.saveMessage(message);
//     res.json(result.url);
//   };

//   public getUrl = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const result = await this.urlService.getUrl(id);
//     res.json(result.msg);
//   };
// }

// export default UrlController;
