"use client";

import { Task } from "@task-types/task-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store/store";
import { decrement, increment } from "../app/tasksSlice";
import { CompletedTaskList } from "./CompletedTaskList";
import { TaskForm } from "./TaskForm";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const [isCompletedListActive, setCompletedListActive] = useState(false);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const deleteTask = (taskToDelete: Task) => {
    setTasks([...tasks.filter((task: Task) => task.id !== taskToDelete.id)]);
    setCompletedTasks([...completedTasks, taskToDelete]);
  };

  const undoTask = (taskToUndo: Task) => {
    setCompletedTasks([
      ...completedTasks.filter((task) => task.id !== taskToUndo.id),
    ]);
    setTasks([...tasks, taskToUndo]);
  };

  const completeListActiveElement = (
    <>
      <input
        onChange={() => setCompletedListActive(!isCompletedListActive)}
        type="checkbox"
        defaultValue={isCompletedListActive.toString()}
        id="completedListActive"
      />
      <label htmlFor="completedListActive">Show Done Tasks</label>
    </>
  );
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <h2>TS nextJS</h2>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      {completeListActiveElement}
      <div className="lists">
        <div>
          <h3>Tasks</h3>
          {tasks.length === 0 ? "No tasks" : null}
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} <button onClick={() => deleteTask(task)}>✔</button>
              </li>
            ))}
          </ul>
        </div>
        {isCompletedListActive ? (
          <CompletedTaskList tasks={completedTasks} onDelete={undoTask} />
        ) : null}
      </div>
    </>
  );
};
