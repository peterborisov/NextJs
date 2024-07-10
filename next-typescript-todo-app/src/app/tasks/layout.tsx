"use client";

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="bold flex justify-center text-3xl">TS - NextJs App</h1>
      {children}
    </>
  );
};

export default TasksLayout;
