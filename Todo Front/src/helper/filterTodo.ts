function filterTodo(todos: Todo[], filterBy: FilterTodoTypes): Todo[] {
  let data: Todo[]; 
  switch (filterBy) {
    case "priority":
      data = todos.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
      break;
    case "createdAt":
      data = todos.sort((a, b) => a.date.getTime() - b.date.getTime());
      break;
    case "edited":
      data = todos.sort((a, b) => (b.isEdited ? 1 : 0) - (a.isEdited ? 1 : 0));
      break;
    case "completed":
      data = todos.sort((a, b) => (b.isDone ? 1 : 0) - (a.isDone ? 1 : 0));
      break;
    default:
      data = todos.sort((a, b) => a.id - b.id);
      break;
  }

  return data;
}

export default filterTodo;
