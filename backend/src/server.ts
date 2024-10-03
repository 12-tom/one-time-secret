import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
