import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  Button,
  Table,
  Badge,
  Label,
  TextInput,
  Checkbox,
  Dropdown,
} from "flowbite-react";

import { Task } from "@task-types/task-types";
import { useSorting } from "@hooks/useSorting";

type TasksListProps = {
  rows: Task[];
};

export const TasksList: FC<TasksListProps> = ({ rows }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("sort");
  const orderByParam = searchParams.get("orderBy");

  const { sortUserId } = useSorting();
  const [page, setPage] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("acs");
  const [orderBy, setOrderBy] = useState("id");

  useEffect(() => {
    router.push(`?sort=${sorting}&orderBy=${orderBy}`);
  }, [sorting]);

  const taskDetails = (task: Task) => {
    router.push(`/tasks/${task.id}`);
  };

  const addTask = () => {
    router.push(`/tasks/addNewTask`);
  };

  if (isChecked) {
    rows = rows.filter((item) => item.completed);
  }

  const filteredRows = rows.filter((task) => {
    return task.id.toString().includes(filterValue);
  });

  const onPageChange = (page: number) => setPage(page);

  const onFilterChange = (e) => {
    e.preventDefault();
    setFilterValue(e.target.value);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handlesSorting = () => {
    sorting === "acs" ? setSorting("des") : setSorting("acs");
  };

  return (
    <div className="mx-auto w-[70%]">
      <div className="my-4 flex items-end gap-4">
        <div>
          <Label htmlFor="task-id">Filter by task ID</Label>
          <TextInput id="task-id" onChange={onFilterChange} />
        </div>
        <Dropdown label="Order by">
          <Dropdown.Item>User ID</Dropdown.Item>
          <Dropdown.Item>Task ID</Dropdown.Item>
          <Dropdown.Item>Title</Dropdown.Item>
        </Dropdown>
        <Button className="h-10" onClick={() => addTask()}>
          Add Task
        </Button>
        <Checkbox id="completed" checked={isChecked} onChange={handleChecked} />
        <Label htmlFor="completed">Show only completed Tasks</Label>
      </div>
      <div className="my-4">
        {filteredRows.length > 0 ? (
          <Badge color="success">{`Tasks found: ${filteredRows.length}`}</Badge>
        ) : (
          <Badge color="failure">No tasks found</Badge>
        )}
      </div>
      <div className="mb-4"></div>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell onClick={handlesSorting}>userId</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
          <Table.HeadCell align="right">Title</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {sortUserId(sorting, filteredRows)
            .slice(page * 10, page * 10 + 10)
            .map((task: Task) => (
              <Table.Row key={task.id}>
                <Table.Cell>{task.userId}</Table.Cell>
                <Table.Cell>{task.id}</Table.Cell>
                <Table.Cell>
                  {task.completed ? (
                    <Badge color="success">Task completed</Badge>
                  ) : (
                    <Badge color="failure">Not completed</Badge>
                  )}
                </Table.Cell>
                <Table.Cell
                  className="flex items-center justify-end gap-4"
                  align="right"
                >
                  {task.title}
                  <Button onClick={() => taskDetails(task)}>
                    Task Details
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <Pagination
        currentPage={page}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
};
