import React, { ReactNode, useState } from "react";
import TodoContext from "../contexts/TodoContext";

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [searchedFor, setSearchedFor] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterTodoTypes>("default");
  const [modal, setModal] = useState<[boolean, CreateTaskModalProps]>([false, { editMode: false, examineMode: false }]);

  const removeTodo = (uuid: string) => {
    setTodo((todo) => todo.filter((t) => t.uuid !== uuid));
  };

  const removeTodos = () => {
    setTodo([]);
  };

  const setDone = (uuid: string) => {
    setTodo((todo) =>
      todo.map((t) => (t.uuid === uuid ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const setEdited = (uuid: string, subject: string) => {
    setTodo((todo) =>
      todo.map((t) => (t.uuid === uuid ? { ...t, isEdited: true, subject } : t))
    );
  };

  const setPinned = (uuid: string) => {
    setTodo((todo) =>
      todo.map((t) => (t.uuid === uuid ? { ...t, isPinned: !t.isPinned } : t))
    );
  };

  const value: TodoContextType = {
    completed: todo.filter((t) => t.isDone).length,
    filter,
    modal,
    removeTodo,
    searchedFor,
    setDone,
    setEdited,
    setFilter,
    setModal,
    setPinned,
    setSearchedFor,
    setTodo,
    todo,
    total: todo.length,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
