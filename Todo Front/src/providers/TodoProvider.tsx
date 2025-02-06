import React, { ReactNode, useEffect, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import fetchTodos from "../services/fetchTodos";
import { toast } from "react-toastify";
import config from "../config";
import deleteTodo from "../services/deleteTodo";
import updateTodo from "../services/updateTodo";

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

  /**
   * This is for later updates or i'll remove it.
   * Still not sure about it.
   */
  const removeTodos = () => {
    setTodo([]);
  };

  /**
   * Private function to update todo.
   * This is not exposed to the context.
   * Local use only.
   *
   * @private
   */
  const update = async (
    uuid: string,
    changingData: Partial<Omit<Todo, "date" | "uuid">> = {}
  ) => {
    if (config.useDatabase) {
      const data = todo.find((t) => t.uuid === uuid);
      if (!data) return;
      const { isDone, isEdited, isPinned, subject } = data;
      updateTodo(uuid, {
        isDone: changingData.isDone !== undefined ? changingData.isDone : isDone,
        isEdited: changingData.isEdited !== undefined ? changingData.isEdited : isEdited,
        isPinned: changingData.isPinned !== undefined ? changingData.isPinned : isPinned,
        subject: changingData.subject !== undefined ? changingData.subject : subject,
      });
    }
  };

  const setDone = async (uuid: string) => {
    const todoItem = todo.find((t) => t.uuid === uuid);

    if (!todoItem) {
      console.error("Todo item not found");
      return;
    }

    if (config.useDatabase) {
      try {
        await update(uuid, { isDone: !todoItem.isDone });
        setTodo((todo) =>
          todo.map((t) => (t.uuid === uuid ? { ...t, isDone: !t.isDone } : t))
        );
        if (!todoItem.isDone) {
          toast.success("Todo marked as done successfully", { theme: "dark" });
        }
      } catch (error) {
        console.error("Error updating todo:", error);
        toast.error("Failed to update todo", { theme: "dark" });
      }
    } else {
      setTodo((todo) =>
        todo.map((t) => (t.uuid === uuid ? { ...t, isDone: !t.isDone } : t))
      );
      if (!todoItem.isDone) {
        toast.success("Todo marked as done successfully", { theme: "dark" });
      }
    }
  };

  const setEdited = async (uuid: string, subject: string) => {
    if (config.useDatabase) {
      try {
        await update(uuid, { subject, isEdited: true });
        setTodo((todo) =>
          todo.map((t) =>
            t.uuid === uuid ? { ...t, isEdited: true, subject } : t
          )
        );
      } catch (error) {
        console.error("Error updating todo:", error);
        toast.error("Failed to update todo", { theme: "dark" });
      }
    } else {
      setTodo((todo) =>
        todo.map((t) =>
          t.uuid === uuid ? { ...t, isEdited: true, subject } : t
        )
      );
    }
    toast.success("Todo edited successfully", { theme: "dark" });
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
