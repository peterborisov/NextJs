import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import { DropdownComponent } from "@components/index";

type TasksProps = {
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterComponent: FC<TasksProps> = ({
  onFilterChange,
  isChecked,
  handleChecked,
}) => {
  const router = useRouter();
  //   const searchParams = useSearchParams();

  //   const searchParam = searchParams.get("sort");
  //   const orderByParam = searchParams.get("orderBy");

  const addTask = () => {
    router.push(`/tasks/addNewTask`);
  };

  return (
    <div className="my-4 flex items-end gap-4">
      <div>
        <Label htmlFor="task-id">Filter by task ID</Label>
        <TextInput
          id="task-id"
          data-testid="task-id"
          onChange={onFilterChange}
        />
      </div>
      <DropdownComponent />
      <Button className="h-10" data-testid="add-task" onClick={() => addTask()}>
        Add Task
      </Button>
      <Checkbox id="completed" checked={isChecked} onChange={handleChecked} />
      <Label htmlFor="completed">Show only completed Tasks</Label>
    </div>
  );
};
