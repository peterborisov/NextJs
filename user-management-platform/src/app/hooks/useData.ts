import { createAsyncThunk } from "@reduxjs/toolkit";

export const useData = () => {
  const fetchTasks = createAsyncThunk("tasks/", async () => {
    const response = await fetch(`/api/tasks`);
    return await response.json();
  });

  const fetchTask = createAsyncThunk(`task`, async (_id: string) => {
    const res = await fetch(`/api/tasks/${_id}`);
    return res.json();
  });

  const fetchUsers = createAsyncThunk("users/", async () => {
    const response = await fetch(`/api/users`);
    return await response.json();
  });

  const fetchUser = createAsyncThunk(`user`, async (_id: string) => {
    const res = await fetch(`/api/users/${_id}`);
    return res.json();
  });

  return {
    fetchTask,
    fetchTasks,
    fetchUser,
    fetchUsers,
  };
};
