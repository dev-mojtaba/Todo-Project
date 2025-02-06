import { Router } from "express";
import TodoModel from "../../models/Todo";
import uuidv4 from "../../helper/uuidv4";
import uuidv5 from "../../helper/uuidv5";

const router = Router();

router.post("/", async (req, res) => {
  const { subject } = req.body;

  if (typeof subject !== "string" || subject.trim().length === 0) {
    res.status(400).json({ message: "Subject is required" });
    return;
  }

  const uuid = uuidv5(subject, uuidv4());
  const newTodo = new TodoModel({ subject, uuid });

  await newTodo.save();
  res.status(201).json({ message: "Todo created successfully", data: newTodo });
});

export default router;
