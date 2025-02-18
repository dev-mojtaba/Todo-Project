import React from "react";
import TaskOverviewBox from "./TaskOverview";
import SortBy from "./SortBy";
import RemoveTodos from "./RemoveTodos";

const TaskManagement: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between py-2 w-full border-b border-primary-task-overview-border">
        <TaskOverviewBox />
        <SortBy />
      </div>
      <div className="py-2">
        <RemoveTodos />
      </div>
    </div>
  );
};

export default TaskManagement;
