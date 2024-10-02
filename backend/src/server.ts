import express from "express";
import cors from "cors";
import router from "./routes";
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use('/', router);

app.listen(3000, () => {
    console.log("Server is started on port 3000")
});
