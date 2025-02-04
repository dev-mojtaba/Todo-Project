import React from "react";
import useTodo from "../../hooks/useTodo";

const TaskOverviewBox: React.FC = () => {
  const { completed, total } = useTodo();

  return (
    <div className="task-overview__box">
      <div className="total__tasks">
        <span>Tasks:</span>
        <span>
          {completed} of {total}
        </span>
      </div>
    </div>
  );
};

export default TaskOverviewBox;
