import { Router } from "express";
import { get, save } from "../controllers";

const router = Router();

router.post("/", save);

router.get("/secret/:id", get);

export default router;
