import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const conString: string = process.env.DATABASE_URL as string;
const client = new pg.Client(conString);

export default client;
