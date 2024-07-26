"use client";

import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Card, Badge } from "flowbite-react";

import type { RootState } from "@app/store/store";
import { useData } from "@hooks/useData";

type Props = {
  taskId: number;
};

export const TaskDetails: FC<Props> = ({ taskId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { fetchTask } = useData();

  const task = useSelector((state: RootState) => state.tasksState.task);

  const { userId, id, title, completed } = task;

  useEffect(() => {
    dispatch(fetchTask(taskId));
  }, [dispatch]);

  const handleBackToTasks = () => {
    router.push("/tasks");
  };

  const styles = {
    p: "font-normal text-gray-700 dark:text-gray-400",
    h5: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
  };
  return (
    <>
      <Card className="mx-auto my-44 w-[40%]">
        <h5 className={styles.h5}>Task Details:</h5>
        <p className={styles.p}>User ID: {userId}</p>
        <p className={styles.p}>Task ID: {id}</p>
        <p className={styles.p}>Task Title : {title}</p>
        <p>
          {completed ? (
            <Badge color="success">Task is completed</Badge>
          ) : (
            <Badge color="failure">Task is not complete</Badge>
          )}
        </p>
      </Card>
      <Button onClick={handleBackToTasks}>All tasks</Button>
    </>
  );
};
