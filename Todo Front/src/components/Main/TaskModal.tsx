import React, { useEffect, useRef, useState } from "react";
import useTodo from "../../hooks/useTodo";
import uuidv5 from "../../helper/uuidv5";
import uuidv4 from "../../helper/uuidv4";
import PencilIcon from "../Icons/Pencil";
import { toast } from "react-toastify";

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

  const createTask = () => {
    if (inputValue.trim().length === 0) {
      emptyWarn();
      return;
    }

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

    closeModal();
  };

  const editTask = () => {
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
      className={
        "create-task__modal" +
        (modal[0] ? " active" : "") +
        (modal[1].examineMode ? " examine" : "")
      }
    >
      <div className="create-task__wrapper">
        {modal[1].editMode && <h3>Edit a Task</h3>}
        {!modal[1].editMode && !modal[1].examineMode && <h3>Create a Task</h3>}
        {modal[1].examineMode && <h3>Examine a Task</h3>}
        <span>Tip: Tasks with more than 12 characters will be cut off.</span>
        <label htmlFor="create-task">
          <PencilIcon />
          <input
            id="create-task"
            name="create-task"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.substring(0, 20))}
            placeholder="Task subject..."
            ref={ref}
            readOnly={modal[1].examineMode}
          />
          <span>{inputValue.length}/20</span>
        </label>
        <div className="modal__buttons">
          {modal[1].examineMode ? (
            <button className="primary-cancel" onClick={closeModal}>
              Close
            </button>
          ) : (
            <>
              <button className="primary-cancel" onClick={closeModal}>
                Cancel
              </button>
              {modal[1].editMode ? (
                <button className="secondary-btn" onClick={editTask}>
                  Edit
                </button>
              ) : (
                <button className="primary-btn" onClick={createTask}>
                  Create
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
