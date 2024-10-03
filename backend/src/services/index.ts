import { v4 } from "uuid";
import client from "../db/models";
import { GetResDto, SaveResDto } from "../dto";

const baseURL = "localhost:5173/secret";

const createID = () => {
  const randomID = v4();
  return randomID;
};

export const saveMessage = async (message: string): Promise<SaveResDto> => {
  const randomID = createID();
  const res = await client.query(
    "INSERT INTO message_url(id, message) values($1, $2)",
    [randomID, message]
  );
  return { url: `${baseURL}/${randomID}` };
};

export const getUrl = async (id: string): Promise<GetResDto> => {
  if (!id || id === null) {
    throw new Error("Invalid id");
  }

  const ids = await client.query(`SELECT id FROM message_url`);
  let i: number = 0;
  let msg = false;

  while (i < ids.rows.length) {
    if (ids.rows[i]["id"] === id) {
      console.log(ids.rows[i]["id"]);
      msg = true
      break;
    }
    i++;
  }

  const res = await client.query(
    `SELECT message FROM message_url WHERE id = $1`,
    [id]
  );
  const del = await client.query(`DELETE FROM message_url WHERE id = $1`, [id]);

  if (msg) {
    return {
      msg: res.rows[0]["message"],
    };
  };
  return {
    msg: null
  };
};



// class UrlService {

//   public saveMessage = async (message: string): Promise<SaveResDto> => {
//     const randomID = createID();
//     const res = await client.query(
//       "INSERT INTO message_url(id, message) values($1, $2)",
//       [randomID, message]
//     );
//     return { url: `${baseURL}/${randomID}` };
//   };

//   public getUrl = async (id: string): Promise<GetResDto> => {
//     if (!id || id === null) {
//       throw new Error("Invalid id");
//     }

//     const res = await client.query(
//       `SELECT message FROM message_url WHERE id = $1`,
//       [id]
//     );
//     return { msg: res.command };
//   };
// }

// export default UrlService;
