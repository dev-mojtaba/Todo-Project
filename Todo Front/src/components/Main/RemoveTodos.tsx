import React from "react";
import useTodo from "../../hooks/useTodo";

const RemoveTodos: React.FC = () => {
  const { removeTodos } = useTodo();

  return (
    <div>
      <button className="primary-cancel" onClick={removeTodos}>
        Remove All
      </button>
    </div>
  );
};

export default RemoveTodos;
