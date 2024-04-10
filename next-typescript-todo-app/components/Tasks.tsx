import { Task } from "@task-types/task-types";
import { useState } from "react";
import { CompletedTaskList } from "../components/CompletedTaskList";
import { TaskForm } from "../components/TaskForm";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const [isCompletedListActive, setCompletedListActive] = useState(false);

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
  console.log("tasks", tasks);
  return (
    <>
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
