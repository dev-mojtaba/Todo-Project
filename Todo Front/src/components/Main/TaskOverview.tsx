import React from "react";
import useTodo from "../../hooks/useTodo";

const TaskOverviewBox: React.FC = () => {
  const { completed, total } = useTodo();

  return (
    <div>
      <div className="flex items-center gap-1">
        <span className="text-xs 2xs:text-sm xs:text-base">Tasks:</span>
        <span className="px-3 xs:px-6 py-0.5 xs:py-1 bg-primary text-xs 2xs:text-sm xs:text-base rounded-full">
          {completed} of {total}
        </span>
      </div>
    </div>
  );
};

export default TaskOverviewBox;
