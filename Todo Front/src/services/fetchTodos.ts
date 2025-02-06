import axios from "axios";

async function fetchTodos(): Promise<Todo[]> {
  return await axios
    .post(
      "http://localhost:3000/api/todo/get",
      {
        all: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data.data);
}

export default fetchTodos;
