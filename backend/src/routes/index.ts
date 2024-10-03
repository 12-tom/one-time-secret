import { Router } from "express";
import { save, get } from "../controllers";

const router = Router();

router.post('/', save);

router.get('/secret/:id', get);

export default router;



// class UrlRoute {
//   public path = "/";
//   public router = Router();
//   public urlController = new UrlController();

//   constructor() {
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.post("", this.urlController.saveMessage);
//     this.router.get("/secret/:id", this.urlController.getUrl);
//   }
// }

// export default UrlRoute;
