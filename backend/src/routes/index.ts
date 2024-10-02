import { Router } from "express";
import { save, get } from "../controllers";

const router = Router();

router.post('/', save);

router.get('/secret/:id', get);

export default router;
