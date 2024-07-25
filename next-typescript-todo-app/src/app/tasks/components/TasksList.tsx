import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TableComponent, FilterComponent } from "@components/index";
import { fetchTasks } from "@tasks/tasks-slice";
import type { RootState } from "@app/store/store";

export const TasksList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <FilterComponent />
      <TableComponent data={data.tasks} />
    </>
  );
};
