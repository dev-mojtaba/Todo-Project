import { Router } from "express";
import TodoModel from "../../models/Todo";

const router = Router();

router.post("/", async (req, res) => {
  const { all, uuid } = req.body;
  let data;

  if (all) {
    data = await TodoModel.find({}).lean();
  } else {
    if (typeof uuid !== "string" || uuid.trim().length === 0) {
      res.status(400).json({ message: "UUID is required" });
      return;
    }

    data = await TodoModel.findOne({ uuid }).lean();

    if (!data) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
  }

  res.status(200).json({ data });
});

export default router;
