import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, TextInput, Checkbox } from "flowbite-react";

import { setFilterValue, setIsChecked } from "@tasks/tasks-slice";

import type { RootState } from "@app/store/store";
import { DropdownComponent } from "./index";

export const FilterComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  //   const searchParams = useSearchParams();

  //   const searchParam = searchParams.get("sort");
  //   const orderByParam = searchParams.get("orderBy");
  const isChecked = useSelector(
    (state: RootState) => state.tasksState.isChecked,
  );

  const onFilterChange = (e) => {
    e.preventDefault();
    dispatch(setFilterValue(e.target.value));
  };

  const handleChecked = () => {
    dispatch(setIsChecked(!isChecked));
  };

  const addTask = () => {
    router.push(`/tasks/addNewTask`);
  };

  return (
    <div className="mb-4 flex items-end gap-4">
      <div>
        <Label htmlFor="task-id">Filter by task ID</Label>
        <TextInput
          id="task-id"
          data-testid="task-id"
          onChange={onFilterChange}
        />
      </div>
      <DropdownComponent />
      <Button data-testid="add-task" onClick={() => addTask()}>
        Add Task
      </Button>
      <Checkbox id="completed" checked={isChecked} onChange={handleChecked} />
      <Label htmlFor="completed">Show only completed Tasks</Label>
    </div>
  );
};
