import { FC } from "react";

import { Task } from "../task-types/task-types";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FC<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li>
      {task.name} <button onClick={onClick}>✔</button>
    </li>
  );
};
