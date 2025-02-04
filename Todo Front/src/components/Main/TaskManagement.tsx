import React from "react";
import TaskOverviewBox from "./TaskOverview";
import SortBy from "./SortBy";

const TaskManagement: React.FC = () => {
  return (
    <div className="task-management__box">
      <TaskOverviewBox />
      <SortBy />
    </div>
  );
};

export default TaskManagement;
