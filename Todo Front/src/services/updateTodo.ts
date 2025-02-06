import axios from "axios";

async function updateTodo(uuid: string, data: Omit<Todo, "date" | "uuid">) {
  return await axios.patch(`http://localhost:3000/api/todo/update/${uuid}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default updateTodo;
