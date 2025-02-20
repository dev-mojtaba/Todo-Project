import React from "react";
import useTodo from "../../hooks/useTodo";

const AddTaskButton: React.FC = () => {
  const { setModal } = useTodo();

  return (
    <div className="ml-auto cursor-pointer">
      <div
        className="relative flex items-center justify-center p-6 w-fit h-fit bg-primary rounded-full aspect-square after:add-task after:rotate-90 before:add-task"
        onClick={() =>
          setModal([true, { editMode: false, examineMode: false }])
        }
      ></div>
    </div>
  );
};

export default AddTaskButton;
