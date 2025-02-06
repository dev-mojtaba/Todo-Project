import React, { ReactNode, useEffect, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import fetchTodos from "../services/fetchTodos";
import { toast } from "react-toastify";
import config from "../config";
import deleteTodo from "../services/deleteTodo";

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [searchedFor, setSearchedFor] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterTodoTypes>("default");
  const [modal, setModal] = useState<[boolean, CreateTaskModalProps]>([
    false,
    { editMode: false, examineMode: false },
  ]);

  useEffect(() => {
    if (config.useDatabase) {
      const fetchData = async () => {
        let attempts = 0;
        const maxAttempts = config.maxDatabaseAttempts || 5;
        let success = false;

        while (attempts < maxAttempts && !success) {
          try {
            const data = await fetchTodos();
            setTodo(data);
            success = true;
            console.log(`Connected at attempt: ${attempts}`);
          } catch (error) {
            attempts += 1;
            console.error(`Attempt ${attempts} - Error fetching todos:`, error);
            if (attempts >= maxAttempts) {
              toast.error(
                "Max attempts reached. Starting app without API data.",
                { theme: "dark" }
              );
            }
          }
        }
      };

      fetchData();
    } else {
      console.log("Running in offline mode. No database connection.");
    }
  }, []);

  const removeTodo = async (uuid: string) => {
    if (config.useDatabase) {
      try {
        await deleteTodo(uuid);
        setTodo((todo) => todo.filter((t) => t.uuid !== uuid));
      } catch (error) {
        console.error("Error removing todo:", error);
        toast.error("Failed to remove todo", { theme: "dark" });
      }
    } else {
      setTodo((todo) => todo.filter((t) => t.uuid !== uuid));
    }
    toast.success("Todo removed successfully", { theme: "dark" });
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
    removeTodos,
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
