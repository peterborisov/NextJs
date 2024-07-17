import { useState } from "react";
import { Dropdown } from "flowbite-react";

export const DropdownComponent = () => {
  const [orderByLabel, setOrderByLabel] = useState("Order by");

  const handleOrderByLabel = () => {
    setOrderByLabel("test");
  };

  return (
    <Dropdown onSelect={handleOrderByLabel} label={orderByLabel}>
      <Dropdown.Item>User ID</Dropdown.Item>
      <Dropdown.Item>Task ID</Dropdown.Item>
      <Dropdown.Item>Title</Dropdown.Item>
    </Dropdown>
  );
};
