import { Request, Response } from "express";
import { getUrl, saveMessage } from "../services";

export const save = async (req: Request, res: Response) => {
  const message = req.body.data;
  const result = await saveMessage(message);
  res.json(result.url);
};

export const get = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    return res.json({ error: "Id is required" });
  }

  const result = await getUrl(id);
  res.json(result.msg);
};
