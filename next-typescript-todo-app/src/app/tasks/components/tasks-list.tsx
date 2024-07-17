import { useState, useEffect } from "react";
import { TableComponent, FilterComponent } from "@components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "@tasks/tasks-slice";
import type { RootState } from "../../store/store";

export const TasksList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.tasksState);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const [filterValue, setFilterValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onFilterChange = (e) => {
    e.preventDefault();
    setFilterValue(e.target.value);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mx-auto w-[70%]">
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
    </div>
  );
};
