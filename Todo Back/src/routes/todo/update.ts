import { Router } from "express";
import TodoModel from "../../models/Todo";

const router = Router();

router.patch("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { isDone, isEdited, isPinned, subject } = req.body;

  if (!(await TodoModel.exists({ uuid }))) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  if (isDone === undefined || isEdited === undefined || isPinned === undefined || subject === undefined) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  } else {
    if (typeof isDone !== "boolean") {
      res.status(400).json({ message: "isDone must be a boolean" });
      return;
    }

    if (typeof isEdited !== "boolean") {
      res.status(400).json({ message: "isEdited must be a boolean" });
      return;
    }

    if (typeof isPinned !== "boolean") {
      res.status(400).json({ message: "isPinned must be a boolean" });
      return;
    }

    if (typeof subject !== "string") {
      res.status(400).json({ message: "subject must be a string" });
      return;
    }

    await TodoModel.updateOne(
      { uuid },
      { $set: { isDone, isEdited, isPinned, subject } }
    );

    res.json({ message: `Todo "${uuid}" updated` });
  }
});

export default router;
