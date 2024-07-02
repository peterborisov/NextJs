"use client";

import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import type { RootState } from "../../../store/store";
import { fetchTask } from "@tasks/tasks-slice";

type Props = {
  taskId: number;
};

export const TaskDetails: FC<Props> = ({ taskId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);

  const { userId, id, title, completed } = data.task;

  useEffect(() => {
    dispatch(fetchTask(taskId));
  }, [dispatch]);

  const handleBackToTasks = () => {
    router.push("/tasks");
  };

  return (
    <>
      <Button onClick={handleBackToTasks}>All tasks</Button>
      <p>{userId}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p>{completed ? "Completed" : "Not completed"}</p>
    </>
  );
};
