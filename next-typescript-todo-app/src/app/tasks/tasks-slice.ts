"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "@tasks/task-types/task-types";
import { v4 as uuidv4 } from "uuid";

interface TasksState {
  tasks: Task[];
  task: Task;
  page: number;
  sorting: string;
  orderBy: string;
  orderByLabel: string;
  filterValue: string;
  isChecked: boolean;
}

export const initialState: TasksState = {
  tasks: [],
  task: {
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  },
  page: 0,
  sorting: "acs",
  orderBy: "id",
  orderByLabel: "Order By",
  filterValue: "",
  isChecked: false,
};

export const fetchTasks = createAsyncThunk("tasks/", async () => {
  const response = await fetch(`/api/tasks`);
  return await response.json();
});

export const fetchTask = createAsyncThunk(`task`, async (id: number) => {
  const res = await fetch(`/api/tasks/${id}`);
  return res.json();
});

export const tasksSlice = createSlice({
  name: "tasksState",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        userId: uuidv4(),
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setOrderByLabel: (state, action) => {
      state.orderByLabel = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setIsChecked: (state, action) => {
      state.isChecked = action.payload;
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

export const {
  addTask,
  setPage,
  setSorting,
  setOrderBy,
  setOrderByLabel,
  setFilterValue,
  setIsChecked,
} = tasksSlice.actions;

export default tasksSlice.reducer;
