import { Request, Response } from "express";
import { saveMessage, getUrl } from "../services";

export const save = async (req: Request, res: Response) => {
  const message = req.body.data;
  const result = await saveMessage(message);
  res.json(result.url);
};

export const get = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getUrl(id);
  res.json(result.msg);
};
