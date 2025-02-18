import axios from "axios";

async function deleteTodos() {
  return await axios.delete(`http://localhost:3000/api/todo/remove-all`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default deleteTodos;
