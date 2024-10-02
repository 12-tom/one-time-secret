import { v4 } from "uuid";
import { GetResDto, SaveResDto } from "../dto";
import Message from "../db/models/message";
import { Model } from "sequelize";

const baseURL = "localhost:5173/secret";

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
