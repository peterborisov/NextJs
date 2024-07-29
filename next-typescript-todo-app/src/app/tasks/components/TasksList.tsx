import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  TableComponent,
  FilterComponent,
  BreadcrumbComponent,
} from "@components/index";
import type { RootState } from "@app/store/store";
import { useData } from "@hooks/useData";

export const TasksList = () => {
  const dispatch = useDispatch();
  const { fetchTasks } = useData();

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
      <BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
      <FilterComponent />
      <TableComponent data={tasks} />
    </>
  );
};
