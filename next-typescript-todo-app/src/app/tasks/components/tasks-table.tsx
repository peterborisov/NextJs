import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
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
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
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
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((task: Task) => (
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
      <TablePagination
        sx={{ maxWidth: 650 }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
