import React, { useEffect, useRef, useState } from "react";
import useTodo from "../../hooks/useTodo";
import uuidv5 from "../../helper/uuidv5";
import uuidv4 from "../../helper/uuidv4";
import PencilIcon from "../Icons/Pencil";
import { toast } from "react-toastify";
import config from "../../config";
import createTodo from "../../services/createTodo";
import SearchIcon from "../Icons/Search";

const TaskModal: React.FC = () => {
  const { modal, setEdited, setModal, setTodo } = useTodo();
  const [inputValue, setInputValue] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  const emptyWarn = () => {
    toast.warn("Task subject cannot be empty.", {
      theme: "dark",
    });
  };

  const closeModal = () => {
    setModal([false, { editMode: false, examineMode: false }]);
    setInputValue("");
  };

  const createTask = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      emptyWarn();
      return;
    }

    if (config.useDatabase) {
      try {
        const createdTask = await createTodo(inputValue);
        setTodo((todo) => [...todo, createdTask]);
        toast.success(`Task "${inputValue}" created successfully.`, {
          theme: "dark",
        });
      } catch (error) {
        console.error("Error creating task:", error);
        toast.error("Failed to create task", { theme: "dark" });
      }
    } else {
      setTodo((todo) => [
        ...todo,
        {
          date: new Date(),
          isDone: false,
          isEdited: false,
          isPinned: false,
          subject: inputValue,
          uuid: uuidv5(inputValue, uuidv4()),
        },
      ]);
      toast.success(`Task "${inputValue}" created successfully.`, {
        theme: "dark",
      });
    }

    closeModal();
  };

  const editTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      emptyWarn();
      return;
    }
    if (inputValue === modal[1].subject) {
      toast.warn("Task subject is the same.", {
        theme: "dark",
      });
      return;
    }

    if (modal[1].editMode) {
      setEdited(modal[1].uuid, inputValue);
    }

    closeModal();
  };

  useEffect(() => {
    if (modal[1].editMode || modal[1].examineMode) {
      setInputValue(modal[1].subject);
    }
  }, [modal]);

  return (
    <div
      className="group fixed -top-full left-0 flex items-center justify-center w-screen h-screen bg-black/[0.01] dark:bg-white/[0.01] transition-[top,_backdrop-filter] ease-linear duration-300 z-50 data-[modal-active=true]:-top-0 data-[modal-active=true]:backdrop-blur-xl"
      data-modal-active={modal[0]}
      data-modal-examine={modal[1].examineMode}
    >
      <div className="container flex flex-col items-center justify-center gap-8">
        {modal[1].editMode && <h3 className="text-2xl">Edit a Task</h3>}
        {!modal[1].editMode && !modal[1].examineMode && (
          <h3 className="text-2xl">Create a Task</h3>
        )}
        {modal[1].examineMode && <h3 className="text-2xl">Examine a Task</h3>}
        <span className="text-xs text-center">
          Tip: Tasks with more than 12 characters will be cut off.
        </span>
        <form className="flex flex-col items-center justify-center gap-8 w-full">
          <label
            htmlFor="create-task"
            className="group-data-[modal-examine=true]:after:modal-task-examine-lock relative w-full"
          >
            <PencilIcon className="group-data-[modal-examine=true]:opacity-0 absolute inset-y-0 mx-4 my-auto fill-primary-dark dark:fill-primary-light pointer-events-none" />
            <SearchIcon className="group-data-[modal-examine=true]:opacity-100 absolute inset-y-0 mx-4 my-auto fill-primary-dark dark:fill-primary-light pointer-events-none opacity-0" />
            <input
              id="create-task"
              className="indent-8 px-4 py-2 w-full bg-primary-light dark:bg-primary-input rounded-lg outline-none outline-hidden border-none placeholder:text-primary-input-text hover:placeholder:text-primary-input-text-hover focus:placeholder:opacity-0 placeholder:select-none placeholder:transition-all duration-300 ease-linear"
              name="create-task"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.substring(0, 20))}
              placeholder="Task subject..."
              ref={ref}
              readOnly={modal[1].examineMode}
            />
            <span className="absolute right-0 top-1/2 mx-4 text-xs text-secondary-dark dark:text-secondary-light -translate-y-1/2 pointer-events-none">
              {inputValue.length}/20
            </span>
          </label>
          <div className="flex gap-10">
            {modal[1].examineMode ? (
              <button
                className="primary-cancel"
                onClick={closeModal}
                type="button"
              >
                Close
              </button>
            ) : (
              <>
                <button
                  className="primary-cancel"
                  onClick={closeModal}
                  type="button"
                >
                  Cancel
                </button>
                {modal[1].editMode ? (
                  <button
                    className="secondary-btn"
                    onClick={editTask}
                    type="submit"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="primary-btn"
                    onClick={createTask}
                    type="submit"
                  >
                    Create
                  </button>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
