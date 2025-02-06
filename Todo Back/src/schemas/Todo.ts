import { Schema } from "mongoose";

const TodoSchema = new Schema<Todo>({
  date: {
    type: Date,
    default: new Date(),
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  isEdited: {
    type: Boolean,
    default: false,
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  subject: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    unique: true,
  },
});

export default TodoSchema;
