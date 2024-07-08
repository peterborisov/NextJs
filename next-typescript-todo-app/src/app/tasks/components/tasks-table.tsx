import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination, Button, Table } from "flowbite-react";

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
  const onPageChange = (page: number) => setPage(page);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>userId</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell align="right">Title</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {rows.slice(page * 10, page * 10 + 10).map((task: Task) => (
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
    </>
  );
};
