import { FC } from "react";

import { Task } from "@task-types/task-types";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TaskList: FC<Props> = ({ tasks, onDelete }) => (
  <>
    <div>
      <h3>Tasks</h3>
      {tasks.length === 0 ? "No tasks" : null}
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  </>
);
