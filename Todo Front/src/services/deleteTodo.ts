import axios from "axios";

async function deleteTodo(uuid: string) {
  return await axios.delete(`http://localhost:3000/api/todo/remove/${uuid}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default deleteTodo;
