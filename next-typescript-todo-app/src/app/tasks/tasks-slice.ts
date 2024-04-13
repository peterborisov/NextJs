import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@task-types/task-types";
import { v4 as uuid } from "uuid";

interface TasksState {
  tasks: Task[];
  isCompletedListActive: boolean;
}

const initialState: TasksState = {
  tasks: [],
  isCompletedListActive: false,
};

export const tasksSlice = createSlice({
  name: "tasksState",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks = [...state.tasks, newTask];
    },

    isComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id == action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },

    isCompleteActive: (state, action) => {
      state.isCompletedListActive = !action.payload;
    },
  },
});

export const { addTask, isComplete, isCompleteActive } = tasksSlice.actions;

export default tasksSlice.reducer;
