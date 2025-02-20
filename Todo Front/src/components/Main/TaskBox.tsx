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
      className={
        "relative flex items-center justify-between px-2 2xs:px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-4 w-[95%] h-fit bg-primary-light dark:bg-secondary-dark rounded-lg transition-[transform,_box-shadow,_filter] ease-linear duration-300 hover:forward-child-bluriness has-[+*:hover]:blur-[3px] has-[+*+*:hover]:blur-[4px] has-[+*+*+*:hover]:blur-[5px] has-[+*+*+*+*:hover]:blur-[6px] has-[+*+*+*+*+*:hover]:blur-[7px]" +
        (isDone ? " animate-task-done" : "")
      }
      data-active={isDone}
    >
      {isEdited && (
        <span className="absolute top-1 left-1 text-[8px] leading-none text-secondary-dark dark:text-secondary-light italic">
          Edited
        </span>
      )}
      <div className="flex items-center gap-1 2xs:gap-1.5 xs:gap-2">
        <div
          className="group relative w-4 2xs:w-5 xs:w-6 h-4 2xs:h-5 xs:h-6 border-2 border-primary-dark dark:border-primary-light rounded-full cursor-pointer"
          onClick={() => setDone(uuid)}
        >
          <TickIcon
            className={
              "absolute inset-0 m-auto w-3 2xs:w-3.5 xs:w-4 h-3 2xs:h-3.5 xs:h-4 transition-all" +
              (isDone
                ? " rounded-full opacity-100"
                : " group-hover:opacity-100 group-hover:fill-primary-dark group-hover:dark:fill-primary-light opacity-0")
            }
            pathClassName={
              "stroke-primary-dark dark:stroke-primary-light tick-dash-offset-array transition-all" +
              (isDone ? " animate-tick" : " group-hover:opacity-50")
            }
          />
        </div>
        <div
          className={
            "relative flex items-center gap-1 w-fit h-fit transition-all after:crossed-line" +
            (isDone ? " crossed-subject" : "")
          }
          style={{ "--subject-words-length": length } as React.CSSProperties}
        >
          <p className="text-xs xs:text-sm sm:text-base overflow-hidden whitespace-nowrap typewritter">
            {length > maxLength
              ? subject.substring(0, maxLength) + "..."
              : subject}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 2xs:gap-1.5 xs:gap-2">
        <span className="text-[10px] xs:text-xs sm:text-sm md:text-base">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
        </span>
        <div className="flex items-center gap-0.5 2xs:gap-1 xs:gap-1.5 sm:gap-2">
          <div
            className="group relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 cursor-pointer data-[active=true]:pointer-events-none"
            onClick={() => setPinned(uuid)}
            data-pinned={isPinned}
            data-active={isDone}
          >
            <PushpinIcon className="group-hover:opacity-0 group-data-[pinned=true]:opacity-0 group-data-[active=true]:grayscale w-full h-full fill-yellow-700 dark:fill-yellow-500 transition-all ease-linear opacity-100" />
            <PushpinFilledIcon className="group-hover:opacity-100 group-data-[pinned=true]:opacity-0 group-data-[active=true]:grayscale absolute inset-0 m-auto w-full h-full fill-yellow-700 dark:fill-yellow-500 transition-all ease-linear opacity-0" />
            <UnpinFilledIcon className="group-data-[pinned=true]:opacity-100 group-data-[active=true]:grayscale absolute inset-0 m-auto w-full h-full fill-yellow-700 dark:fill-yellow-500 transition-all ease-linear opacity-0" />
          </div>
          <div
            className="group relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 cursor-pointer data-[active=true]:pointer-events-none"
            onClick={() =>
              setModal([
                true,
                { editMode: true, examineMode: false, subject, uuid },
              ])
            }
            data-active={isDone}
          >
            <EditIcon className="group-hover:opacity-0 group-data-[active=true]:grayscale w-full h-full fill-emerald-700 dark:fill-emerald-500 transition-all ease-linear opacity-100" />
            <EditFilledIcon className="group-hover:opacity-100 group-data-[active=true]:grayscale absolute inset-0 m-auto w-full h-full fill-emerald-700 dark:fill-emerald-500 transition-all ease-linear opacity-0" />
          </div>
          <div
            className="group relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 cursor-pointer"
            onClick={() =>
              setModal([true, { editMode: false, examineMode: true, subject }])
            }
          >
            <SearchIcon className="group-hover:opacity-0 w-full h-full fill-cyan-700 dark:fill-cyan-500 transition-opacity ease-linear opacity-100" />
            <SearchFilledIcon className="group-hover:opacity-100 absolute inset-0 m-auto w-full h-full fill-cyan-700 dark:fill-cyan-500 transition-opacity ease-linear opacity-0" />
          </div>
          <div
            className="group relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 cursor-pointer"
            onClick={() => removeTodo(uuid)}
          >
            <DeleteIcon className="group-hover:opacity-0 w-full h-full fill-red-700 dark:fill-red-500 transition-opacity ease-linear opacity-100" />
            <DeleteFilledIcon className="group-hover:opacity-100 absolute inset-0 m-auto w-full h-full fill-red-700 dark:fill-red-500 transition-opacity ease-linear opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
