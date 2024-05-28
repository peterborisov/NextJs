"use client";
/** @jsxImportSource @emotion/react */
import { CompletedTaskList, TaskForm } from "@components/index";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Task } from "@task-types/task-types";
import { isComplete, isCompleteActive } from "@tasks/tasks-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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
      <FormControlLabel
        label="Show Done Tasks"
        control={
          <Checkbox
            onChange={() =>
              dispatch(isCompleteActive(data.isCompletedListActive))
            }
          />
        }
      />
      <>
        <div>
          <h3>Tasks</h3>
          {activeTasks.length === 0 ? "No tasks" : null}
          <ul>
            {activeTasks.map((task: Task) => (
              <li key={task.id}>
                {task.title}{" "}
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  onClick={() => dispatch(isComplete(task))}
                >
                  ✔
                </Button>{" "}
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  onClick={() => taskDetails(task)}
                >
                  Task Details
                </Button>
              </li>
            ))}
          </ul>
        </div>
        {data.isCompletedListActive ? (
          <CompletedTaskList tasks={data.tasks} />
        ) : null}
      </>
    </>
  );
};
