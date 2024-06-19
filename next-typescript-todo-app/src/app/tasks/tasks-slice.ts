"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "@task-types/task-types";
import { v4 as uuid } from "uuid";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const fetchUserData = createAsyncThunk("tasks/", async () => {
  const response = await fetch("http://localhost:3000/api/tasks");
  return await response.json();
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
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.tasks = action.payload.data;
    });
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
