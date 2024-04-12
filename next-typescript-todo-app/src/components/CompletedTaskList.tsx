import { FC } from "react";

import { Task } from "../../task-types/task-types";

interface Props {
  tasks: Task[];
  onDelete: (taskToUndo: Task) => void;
}

export const CompletedTaskList: FC<Props> = ({ tasks, onDelete }) => {
  return (
    <>
      <div>
        <h3>Done</h3>
        {tasks.length === 0 ? "No tasks" : null}
        <ul>
          {tasks.map((task: Task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <button onClick={() => onDelete(task)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
