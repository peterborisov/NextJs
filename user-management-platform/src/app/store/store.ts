import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "@tasks/tasks-slice";
import usersReducer from "@users/users-slice";

export const store = configureStore({
  reducer: {
    tasksState: tasksReducer,
    usersState: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
