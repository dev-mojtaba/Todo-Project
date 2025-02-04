function searchTodo(todos: Todo[], searchedFor: string): Todo[] {
  const regex = new RegExp(searchedFor, "i");

  return todos.filter((todo) => regex.test(todo.subject));
}

export default searchTodo;
