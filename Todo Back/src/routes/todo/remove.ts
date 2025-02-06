import { Router } from "express";
import TodoModel from "../../models/Todo";

const router = Router();

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;

  if (!(await TodoModel.exists({ uuid }))) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  await TodoModel.deleteOne({ uuid });

  res.status(200).json({ message: `Todo "${uuid}" deleted!` });
});

export default router;
