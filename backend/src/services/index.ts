import { Model } from "sequelize";
import { v4 } from "uuid";
import Message from "../db/models/message";
import { GetResDto, SaveResDto } from "../dto";

const baseURL = process.env.BASEURL;

const createID = () => v4();

export const saveMessage = async (message: string): Promise<SaveResDto> => {
  const randomID = createID();
  const res = await Message.create({ id: randomID, message: message });
  return { url: `${baseURL}/${randomID}` };
};

export const getUrl = async (id: string): Promise<GetResDto> => {
  if (!id || id === null) {
    throw new Error("Invalid id");
  }

  const msg: Model<string, string> | null = await Message.findOne({
    where: { id },
  });

  await Message.destroy({ where: { id } });

  return {
    msg: msg?.get("message") ?? null,
  };
};
