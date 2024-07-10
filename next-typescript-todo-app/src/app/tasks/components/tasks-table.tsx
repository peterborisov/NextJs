import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination, Button, Table, input } from "flowbite-react";

import { Task } from "@task-types/task-types";

type TasksTableProps = {
  rows: Task[];
};

export const TasksTable: FC<TasksTableProps> = ({ rows }) => {
  const router = useRouter();

  const taskDetails = (task: Task) => {
    router.push(`/tasks/${task.id}`);
  };
  const [page, setPage] = useState(0);
  const [filterValue, setFilterValue] = useState("");

  const filteredRows = rows.filter((task) => {
    return task.id.toString().includes(filterValue);
  });

  const onPageChange = (page: number) => setPage(page);
  const onFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <div>
        <label
          htmlFor="task-id"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter by task ID
        </label>
        <input
          type="text"
          id="task-id"
          onChange={onFilterChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>userId</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell align="right">Title</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {filteredRows.slice(page * 10, page * 10 + 10).map((task: Task) => (
            <Table.Row key={task.id}>
              <Table.Cell>{task.userId}</Table.Cell>
              <Table.Cell align="right">{task.id}</Table.Cell>
              <Table.Cell align="right">{task.title}</Table.Cell>
              <Table.Cell align="right">
                <Button onClick={() => taskDetails(task)}>Task Details</Button>
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
      <div>Total number of Tasks: {filteredRows.length}</div>
    </>
  );
};
