import { model } from "mongoose";
import uuidv4 from "src/helper/uuidv4";
import uuidv5 from "src/helper/uuidv5";
import TodoSchema from "src/schemas/Todo";

TodoSchema.pre("save", function (next) {
  if (!this.uuid) {
    this.uuid = uuidv5(this.subject, uuidv4());
  }
  next();
});

const TodoModel = model<Todo>("todo", TodoSchema);

export default TodoModel;
