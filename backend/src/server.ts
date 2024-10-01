import express from "express";
import cors from "cors";
import router from "./routes";
import client from "./db/models";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json())

const connectToDatabase = async () => {
    try {
        await client.connect();
    } catch (error) {
        console.error("Failed to connect database", error)
    }
};

connectToDatabase();

app.use('/', router);

app.listen(3000, () => {
    console.log("Server is started on port 3000")
});

// import UrlRoute from "./routes";
// import App from "./app";

// const app = new App([new UrlRoute()]);

// app.listen();
