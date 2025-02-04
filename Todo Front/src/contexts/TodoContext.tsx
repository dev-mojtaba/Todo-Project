import { createContext } from "react";

const TodoContext = createContext<TodoContextType | null>(null);

export default TodoContext;
