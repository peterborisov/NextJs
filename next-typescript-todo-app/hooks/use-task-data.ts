import { Task } from "@task-types/task-types";
import React, { useState } from "react";

export const useTaskData = () => {
  const initialTask = {
    id: 1,
    name: "",
    completed: false,
  };

  const [newTask, setNewTask] = useState(initialTask);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewTask({
      id: newTask.id + 1,
      name: "",
      completed: false,
    });
    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      name: event.target.value,
    });
  };

  const deleteTask = (taskToDelete: Task) => {
    setTasks([...tasks.filter((task) => task.id !== taskToDelete.id)]);
    setCompletedTasks([...completedTasks, taskToDelete]);
  };

  const undoTask = (taskToUndo: Task) => {
    setCompletedTasks([
      ...completedTasks.filter((task) => task.id !== taskToUndo.id),
    ]);
    setTasks([...tasks, taskToUndo]);
  };

  return {
    newTask,
    tasks,
    completedTasks,
    addTask,
    handleTaskChange,
    deleteTask,
    undoTask,
  };
};
