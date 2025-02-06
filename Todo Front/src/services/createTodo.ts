import axios from "axios";

async function createTodo(subject: string): Promise<Todo> {
  return await axios.post(
    "http://localhost:3000/api/todo/create",
    {
      subject,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.data.data);
}

export default createTodo;
