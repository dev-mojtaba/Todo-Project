import React from "react";
import useTodo from "../../hooks/useTodo";
import TickIcon from "../Icons/Tick";
import DeleteIcon from "../Icons/Delete";
import DeleteFilledIcon from "../Icons/DeleteFilled";
import EditIcon from "../Icons/Edit";
import EditFilledIcon from "../Icons/EditFilled";
import SearchIcon from "../Icons/Search";
import SearchFilledIcon from "../Icons/SearchFilled";
import PushpinIcon from "../Icons/Pushpin";
import PushpinFilledIcon from "../Icons/PushpinFilled";
import UnpinFilledIcon from "../Icons/UnpinFilled";

const TaskBox: React.FC<Todo> = ({
  date,
  isDone,
  isEdited,
  isPinned,
  subject,
  uuid,
}) => {
  const { removeTodo, setDone, setModal, setPinned } = useTodo();
  const maxLength = 12;
  const length = subject.length > maxLength ? maxLength + 3 : subject.length;
  subject = subject.trim();

  return (
    <div
      className={`task__box${isDone ? " active" : ""}`}
      data-edited={isEdited ? "true" : "false"}
    >
      {isEdited && <span className="edited">Edited</span>}
      <div className="left">
        <div className="checkbox" onClick={() => setDone(uuid)}>
          <TickIcon />
        </div>
        <div
          className="task__subject"
          style={{ "--subject-words-length": length } as React.CSSProperties}
        >
          <p>
            {length > maxLength
              ? subject.substring(0, maxLength) + "..."
              : subject}
          </p>
        </div>
      </div>
      <div className="right">
        <span className="date">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
        </span>
        <div className="operations">
          <div
            className="pushpin"
            onClick={() => setPinned(uuid)}
            data-pinned={isPinned ? "true" : "false"}
          >
            <PushpinIcon />
            <PushpinFilledIcon />
            <UnpinFilledIcon />
          </div>
          <div
            className="edit"
            onClick={() =>
              setModal([
                true,
                { editMode: true, examineMode: false, subject, uuid },
              ])
            }
          >
            <EditIcon />
            <EditFilledIcon />
          </div>
          <div
            className="examine"
            onClick={() =>
              setModal([true, { editMode: false, examineMode: true, subject }])
            }
          >
            <SearchIcon />
            <SearchFilledIcon />
          </div>
          <div className="delete" onClick={() => removeTodo(uuid)}>
            <DeleteIcon />
            <DeleteFilledIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
