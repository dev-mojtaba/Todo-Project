import { Router } from "express";
import create from "./todo/create";
import get from "./todo/get";
import remove from "./todo/remove";

const router = Router();

router.use("/todo/create", create);
router.use("/todo/get", get);
router.use("/todo/remove", remove);

export default router;
