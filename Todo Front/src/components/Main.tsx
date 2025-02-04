import React from "react";
import TodoProvider from "../providers/TodoProvider";
import SearchBox from "./Main/SearchBox";
import TaskManagement from "./Main/TaskManagement";

const Main: React.FC = () => {
  return (
    <main>
      <div className="main__wrapper">
        <h2>Your Tasks</h2>
        <TodoProvider>
          <SearchBox />
          <TaskManagement />
        </TodoProvider>
      </div>
    </main>
  );
};

export default Main;
