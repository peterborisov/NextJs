import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TableComponent, FilterComponent } from "@components/index";
import type { RootState } from "@app/store/store";
import { useData } from "@hooks/useData";

export const TasksList = () => {
  const dispatch = useDispatch();
  const { fetchTasks } = useData();

  const tasks = useSelector((state: RootState) => state.tasksState.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <FilterComponent />
      <TableComponent data={tasks} />
    </>
  );
};
