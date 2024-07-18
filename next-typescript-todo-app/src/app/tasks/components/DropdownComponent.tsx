import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@app/store/store";
import { setOrderByLabel } from "@tasks/tasks-slice";

export const DropdownComponent = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.tasksState);

  const handleOrderByLabel = () => {
    dispatch(setOrderByLabel("test"));
  };

  return (
    <Dropdown onChange={handleOrderByLabel} label={state.orderByLabel}>
      <Dropdown.Item>User ID</Dropdown.Item>
      <Dropdown.Item>Task ID</Dropdown.Item>
      <Dropdown.Item>Title</Dropdown.Item>
    </Dropdown>
  );
};
