import React, { useMemo } from "react";
import PlusIcon from "../Icons/Plus";
import TaskBox from "./TaskBox";
import useTodo from "../../hooks/useTodo";
import searchTodo from "../../helper/searchTodo";
import filterTodo from "../../helper/filterTodo";
import NotFoundIcon from "../Icons/NotFound";

const TaskList: React.FC = () => {
  const { filter, searchedFor, todo, total } = useTodo();
  const data = useMemo(() => {
    let filteredAndSearchedTodos = [...todo];

    if (searchedFor) {
      filteredAndSearchedTodos = searchTodo(
        filteredAndSearchedTodos,
        searchedFor
      );
    }

    if (filter !== "default") {
      filteredAndSearchedTodos = filterTodo(filteredAndSearchedTodos, filter);
    }

    return filteredAndSearchedTodos;
  }, [todo, searchedFor, filter]);

  return (
    <div className="task-list__box">
      {total === 0 ? (
        <div className="empty">
          <PlusIcon />
          <h5>You have no pending tasks.</h5>
          <p>Create one to get started.</p>
        </div>
      ) : data.length === 0 ? (
        <div className="not__found">
          <NotFoundIcon />
          <h5>No tasks found.</h5>
          <p>Try changing the filter or search term.</p>
        </div>
      ) : (
        <div className="list__box">
          {data.map(
            ({ date, id, isDone, isEdited, isPinned, subject, uuid }) => {
              return (
                <TaskBox
                  date={date}
                  id={id}
                  isDone={isDone}
                  isEdited={isEdited}
                  isPinned={isPinned}
                  subject={subject}
                  uuid={uuid}
                  key={uuid}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;
