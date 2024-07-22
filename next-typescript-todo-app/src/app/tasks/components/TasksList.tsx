import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableComponent, FilterComponent } from "../components";
import { fetchTasks, setFilterValue, setIsChecked } from "@tasks/tasks-slice";
import type { RootState } from "@app/store/store";

export const TasksList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);
  const { filterValue, isChecked } = data;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilterValue(e.target.value));
  };

  const handleChecked = () => {
    dispatch(setIsChecked(!isChecked));
  };

  return (
    <>
      <FilterComponent
        onFilterChange={onFilterChange}
        isChecked={isChecked}
        handleChecked={handleChecked}
      />
      <TableComponent
        data={data.tasks}
        filterValue={filterValue}
        isChecked={isChecked}
      />
    </>
  );
};
