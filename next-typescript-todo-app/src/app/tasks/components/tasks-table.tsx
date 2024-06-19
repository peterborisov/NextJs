import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Task } from "@task-types/task-types";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type TasksTableProps = {
  rows: Task[];
};

export const TasksTable: FC<TasksTableProps> = ({ rows }) => {
  const router = useRouter();

  const taskDetails = (task: Task) => {
    router.push(`/tasks/${task.id}`);
  };

  return (
    <Table sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>userId</TableCell>
          <TableCell align="right">ID</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Completed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((task: Task) => (
          <TableRow key={task.id}>
            <TableCell>{task.userId}</TableCell>
            <TableCell align="right">{task.id}</TableCell>
            <TableCell align="right">{task.title}</TableCell>
            <TableCell align="right">
              <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={() => taskDetails(task)}
              >
                Task Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
