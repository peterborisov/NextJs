"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "@task-types/task-types";
import { v4 as uuid } from "uuid";
import { localhost } from "@app/utils/endpoint";

interface TasksState {
  tasks: Task[];
  task: Task;
}

const initialState: TasksState = {
  tasks: [],
  task: {
    userId: "",
    id: 0,
    title: "",
    completed: false,
  },
};

export const fetchTasks = createAsyncThunk("tasks/", async () => {
  const response = await fetch(`${localhost}/api/tasks`);
  return await response.json();
});

export const fetchTask = createAsyncThunk(`task`, async (id: number) => {
  const res = await fetch(`${localhost}/api/tasks/${id}`);
  return res.json();
});

export const tasksSlice = createSlice({
  name: "tasksState",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        userId: uuid(),
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.data;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.task = action.payload.task;
    });
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
