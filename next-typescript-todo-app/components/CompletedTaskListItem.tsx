import { Task } from "@task-types/task-types";
import { FC } from "react";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const CompletedTaskListItem: FC<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <>
      <li>
        <span>{task.name}</span>
        <button onClick={onClick}>X</button>
      </li>
    </>
  );
};
