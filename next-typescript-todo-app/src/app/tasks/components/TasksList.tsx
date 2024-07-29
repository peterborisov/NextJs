import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  TableComponent,
  FilterComponent,
  BreadcrumbComponent,
} from "@components/index";
import type { RootState } from "@app/store/store";
import { useData, useNav } from "@hooks/index";

export const TasksList = () => {
  const dispatch = useDispatch();
  const { fetchTasks } = useData();
  const {
    paths: { HOME, TASKS },
  } = useNav();

  const tasks = useSelector((state: RootState) => state.tasksState.tasks);

  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/tasks", label: "Tasks List" },
  ];

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <BreadcrumbComponent breadcrumbItems={[HOME, TASKS]} />
      <FilterComponent />
      <TableComponent data={tasks} />
    </>
  );
};
