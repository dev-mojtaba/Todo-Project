import { Router } from "express";
import TodoModel from "../../models/Todo";

const router = Router();

router.delete("/", async (req, res) => {
  if ((await TodoModel.find({})).length === 0) {
    res.status(404).json({ message: "There is no Todo to delete!" });
    return;
  }

  await TodoModel.deleteMany({});

  res.status(200).json({ message: "All Todos deleted!" });
});

export default router;
