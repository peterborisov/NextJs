"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TasksList } from "@components/index";
import { fetchTasks } from "@tasks/tasks-slice";
import type { RootState } from "../../store/store";

export const Tasks = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <TasksList rows={data.tasks} />
    </>
  );
};
