"use client";
/** @jsxImportSource @emotion/react */
import { TasksTable } from "@components/index";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import { Task } from "@task-types/task-types";
import { fetchUserData } from "@tasks/tasks-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import type { RootState } from "../../store/store";
import { useEffect } from "react";

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
    dispatch(fetchUserData());
  }, [dispatch]);

  const activeTasks = data.tasks.filter((task) => {
    return task.completed !== true;
  });

  const taskDetails = (task: Task) => {
    router.push(`/tasks/${task.id}`);
  };

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
