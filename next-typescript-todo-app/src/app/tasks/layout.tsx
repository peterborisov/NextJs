"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div css={styles.container}>
        <div css={styles.inner}>
          <h1 css={styles.titleStyle}>TS - NextJs App</h1>
        </div>
      </div>
      {children}
    </>
  );
};

export default TasksLayout;
