import { Router } from "express";
import create from "./todo/create";
import get from "./todo/get";

const router = Router();

router.use("/todo/create", create);
router.use("/todo/get", get);

export default router;
