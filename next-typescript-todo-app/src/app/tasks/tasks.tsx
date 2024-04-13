"use client";

import { CompletedTaskList, TaskForm } from "@components/index";
import { Task } from "@task-types/task-types";
import { isComplete, isCompleteActive } from "@tasks/tasks-slice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Tasks = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);

  const activeTasks = data.tasks.filter((task) => {
    return task.completed !== true;
  });

  return (
    <>
      <h2>TS nextJS</h2>
      <TaskForm />
      <input
        onChange={() => dispatch(isCompleteActive(data.isCompletedListActive))}
        type="checkbox"
        id="completedListActive"
      />
      <label htmlFor="completedListActive">Show Done Tasks</label>
      <>
        <div>
          <h3>Tasks</h3>
          {activeTasks.length === 0 ? "No tasks" : null}
          <ul>
            {activeTasks.map((task: Task) => (
              <li key={task.id}>
                {task.title}{" "}
                <button onClick={() => dispatch(isComplete(task))}>✔</button>
              </li>
            ))}
          </ul>
        </div>
        {data.isCompletedListActive ? (
          <CompletedTaskList tasks={data.tasks} />
        ) : null}
      </>
    </>
  );
};
