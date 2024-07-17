import { FC, useState, useEffect } from "react";
import { Button, Table, Badge, Pagination } from "flowbite-react";
import { useRouter } from "next/navigation";
import { Task } from "@task-types/task-types";
import { useSorting } from "@hooks/useSorting";

interface TableProps {
  filterValue: string;
  isChecked: boolean;
  data: Task[];
}

export const TableComponent: FC<TableProps> = ({
  filterValue,
  isChecked,
  data,
}) => {
  const router = useRouter();
  const { sortUserId } = useSorting();

  const [sorting, setSorting] = useState("acs");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);

  useEffect(() => {
    router.push(`?sort=${sorting}&orderBy=${orderBy}`);
  }, [sorting]);

  if (isChecked) {
    data = data.filter((item) => item.completed);
  }

  const filteredRows = data.filter((task) => {
    return task.id.toString().includes(filterValue);
  });

  const taskDetails = (task: Task) => {
    router.push(`/tasks/${task.id}`);
  };

  const handlesSorting = () => {
    sorting === "acs" ? setSorting("des") : setSorting("acs");
  };

  const onPageChange = (page: number) => setPage(page);

  return (
    <>
      <div className="my-4">
        {filteredRows.length > 0 ? (
          <Badge color="success">{`Tasks found: ${filteredRows.length}`}</Badge>
        ) : (
          <Badge color="failure">No tasks found</Badge>
        )}
      </div>
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
    </>
  );
};
