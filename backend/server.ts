import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 } from "uuid";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const conString: string = process.env.DATABASE_URL as string;
const client = new pg.Client(conString);
client.connect();

const createID = () => {
  const  randomID = v4();
  return randomID;
};

app.post("/", (req: Request, res: Response) => {
  const message = req.body.data;
  if (!message) {
    return res.status(403).send("Token is required");
  }
  const randomID = createID();
  const url = `http:localhost:5173/secret/` + randomID;

  client.query("INSERT INTO message_url(url, message) values($1, $2)", [
    randomID,
    message,
  ]);

  res.status(200).json(url);
});

app.get("/secret/:url", (req: Request, res: Response) => {
  const url = req.params.url;
  console.log(url);
  const currentUrl = client.query(
    `SELECT message FROM message_url WHERE url IN ${url}`
  );
  res.status(200).json(currentUrl);
});

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
