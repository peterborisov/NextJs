import Button from "@mui/material/Button";
import { isComplete } from "@tasks/tasks-slice";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { Task } from "@task-types/task-types";

interface Props {
  tasks: Task[];
}

export const CompletedTaskList: FC<Props> = ({ tasks }) => {
  const dispatch = useDispatch();

  const completedTasks = tasks.filter((task) => {
    return task.completed === true;
  });

  return (
    <>
      <div>
        <h3>Done</h3>
        {completedTasks.length === 0 ? "No tasks" : null}
        <ul>
          {completedTasks.map((task: Task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => dispatch(isComplete(task))}
              >
                X
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
