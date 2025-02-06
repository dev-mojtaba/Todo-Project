import axios from "axios";

async function createTodo(subject: string) {
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
  );
}

export default createTodo;
