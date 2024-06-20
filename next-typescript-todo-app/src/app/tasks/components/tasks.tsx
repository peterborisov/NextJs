"use client";
/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { TasksTable } from "@components/index";
import { fetchTasks } from "@tasks/tasks-slice";
import type { RootState } from "../../store/store";

const styles = {
  container: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: "20px",
    color: "white",
  }),
  inner: css({
    margin: "auto",
    textAlign: "center",
  }),
  titleStyle: css({
    width: "auto",
  }),
};

export const Tasks = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const data = useSelector((state: RootState) => state.tasksState);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const addTask = () => {
    router.push(`/tasks/addNewTask`);
  };

  return (
    <>
      <div css={styles.container}>
        <div css={styles.inner}>
          <h1 css={styles.titleStyle}>TS - NextJs App</h1>
        </div>
      </div>
      <Button
        variant="outlined"
        color="success"
        size="small"
        onClick={() => addTask()}
      >
        Add Task
      </Button>
      <TasksTable rows={data.tasks} />
    </>
  );
};
