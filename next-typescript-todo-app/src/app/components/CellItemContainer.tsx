import { CellItem } from "./";
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";
import type { RootState } from "@app/store/store";

export const CellItemContainer = () => {
  const { usersState, tasksState } = useSelector((state: RootState) => state);

  return (
    <Card className="mx-auto my-4 mb-20">
      <div className="flex flex-wrap justify-center gap-4">
        <CellItem title="Users:" value={`${usersState.users.length}`} />
        <CellItem title="Tasks:" value={`${tasksState.tasks.length}`} />
        <CellItem
          title=" Tasks Completed:"
          value={`${tasksState.tasks.filter((task) => task.completed).length}`}
        />
        <CellItem
          title=" Tasks Uncompleted:"
          value={`${tasksState.tasks.filter((task) => !task.completed).length}`}
        />
      </div>
    </Card>
  );
};
