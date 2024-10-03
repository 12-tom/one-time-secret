// import cors from "cors";
// import express from "express";
// import client from "./db/models";
// import Routes from "./interfaces/routes.interface";

// class App {
//   public app: express.Application;
//   public port: number;

//   constructor(routes: Routes[]) {
//     this.app = express();
//     this.port = 3000;
//     this.app.use(cors());

//     this.connectToDatabase();
//     this.initializeRoutes(routes);
//   }

//   public listen() {
//     this.app.listen(this.port, () => {
//       console.log(`Server is started on port ${this.port}`);
//     });
//   }

//   private async connectToDatabase() {
//     try {
//       await client.connect();
//     } catch (error) {
//       console.log("Failed connecting database", error);
//     }
//   }

//   private initializeRoutes(routes: Routes[]) {
//     routes.forEach((route) => this.app.use("/api/v1", route.router));
//   }
// }

// export default App;
