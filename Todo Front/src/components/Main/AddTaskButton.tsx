import React from "react";
import useTodo from "../../hooks/useTodo";

const AddTaskButton: React.FC = () => {
  const { setModal } = useTodo();

  return (
    <div className="add-task__box">
      <div className="add" onClick={() => setModal([true, { editMode: false, examineMode: false }])}></div>
    </div>
  );
};

export default AddTaskButton;
