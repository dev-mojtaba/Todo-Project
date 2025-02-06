import { Router } from "express";
import create from "./todo/create";
import get from "./todo/get";
import remove from "./todo/remove";
import update from "./todo/update";

const router = Router();

router.use("/todo/create", create);
router.use("/todo/get", get);
router.use("/todo/remove", remove);
router.use("/todo/update", update);

export default router;
