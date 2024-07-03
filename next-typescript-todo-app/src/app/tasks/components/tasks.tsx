"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";
import { TasksTable } from "@components/index";
import { fetchTasks } from "@tasks/tasks-slice";
import type { RootState } from "../../store/store";

export const Tasks = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const data = useSelector((state: RootState) => state.tasksState);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const addTask = () => {
    router.push(`/tasks/addNewTask`);
  };

  return (
    <>
      <Button onClick={() => addTask()}>Add Task</Button>
      <TasksTable rows={data.tasks} />
    </>
  );
};
