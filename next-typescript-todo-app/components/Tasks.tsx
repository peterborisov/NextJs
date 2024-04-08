import { useState } from "react";
import { CompletedTaskList } from "../components/CompletedTaskList";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { useTaskData } from "../hooks/use-task-data";

export const Tasks = () => {
  const {
    newTask,
    tasks,
    completedTasks,
    addTask,
    handleTaskChange,
    deleteTask,
    undoTask,
  } = useTaskData();

  const [isCompletedListActive, setCompletedListActive] = useState(false);

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
      <h2>TS nextJS</h2>
      <TaskForm
        disabled={!newTask?.name}
        task={newTask}
        onAdd={addTask}
        onChange={handleTaskChange}
      />
      {completeListActiveElement}
      <div className="lists">
        <TaskList tasks={tasks} onDelete={deleteTask} />
        {isCompletedListActive ? (
          <CompletedTaskList tasks={completedTasks} onDelete={undoTask} />
        ) : null}
      </div>
    </>
  );
};
