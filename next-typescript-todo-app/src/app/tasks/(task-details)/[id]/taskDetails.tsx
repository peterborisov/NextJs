"use client";

import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Card, Badge } from "flowbite-react";

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
      <Card className="mx-auto my-44 w-[40%]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Task Details:
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          User ID: {userId}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Task ID: {id}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Task Title : {title}
        </p>
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
