import { Router } from "express";
import create from "./todo/create";

const router = Router();

router.use("/todo/create", create);

export default router;
