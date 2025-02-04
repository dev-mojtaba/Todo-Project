import React from "react";
import TodoProvider from "../providers/TodoProvider";
import SearchBox from "./Main/SearchBox";
import TaskManagement from "./Main/TaskManagement";
import TaskList from "./Main/TaskList";
import AddTaskButton from "./Main/AddTaskButton";
import TaskModal from "./Main/TaskModal";

const Main: React.FC = () => {
  return (
    <main>
      <div className="main__wrapper">
        <h2>Your Tasks</h2>
        <TodoProvider>
          <SearchBox />
          <TaskManagement />
          <TaskList />
          <AddTaskButton />
          <TaskModal />
        </TodoProvider>
      </div>
    </main>
  );
};

export default Main;
