import React from "react";
import TodoProvider from "../providers/TodoProvider";

const Main: React.FC = () => {
  return (
    <main>
      <div className="main__wrapper">
        <h2>Your Tasks</h2>
        <TodoProvider>
          <h3>Children & Provider</h3>
        </TodoProvider>
      </div>
    </main>
  );
};

export default Main;
