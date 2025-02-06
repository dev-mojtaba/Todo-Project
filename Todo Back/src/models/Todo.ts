import { Document, model } from "mongoose";
import TodoSchema from "../schemas/Todo";

interface TodoDocument extends Todo, Document {};

const TodoModel = model<TodoDocument>("todo", TodoSchema);

export default TodoModel;
