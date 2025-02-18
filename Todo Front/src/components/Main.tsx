import React from "react";
import TodoProvider from "../providers/TodoProvider";
import SearchBox from "./Main/SearchBox";
import TaskManagement from "./Main/TaskManagement";
import TaskList from "./Main/TaskList";
import AddTaskButton from "./Main/AddTaskButton";
import TaskModal from "./Main/TaskModal";

const Main: React.FC = () => {
  return (
    <main className="container h-fit">
      <div className="relative flex flex-col items-center gap-8 p-4 2xs:p-5 xs:p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 w-full bg-secondary-light dark:bg-primary-dark rounded-3xl">
        <h2 className="text-3xl">Your Tasks</h2>
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
