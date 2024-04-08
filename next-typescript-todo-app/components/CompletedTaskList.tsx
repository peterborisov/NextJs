import { FC } from "react";

import { Task } from "../task-types/task-types";
import { CompletedTaskListItem } from "./CompletedTaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const CompletedTaskList: FC<Props> = ({ tasks, onDelete }) => {
  return (
    <>
      <div>
        <h3>Done</h3>
        {tasks.length === 0 ? "No tasks" : null}
        <ul>
          {tasks.map((task: Task) => (
            <CompletedTaskListItem
              key={task.id}
              task={task}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
