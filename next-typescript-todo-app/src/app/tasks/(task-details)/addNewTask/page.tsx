"use client";

import { TaskForm } from "@components/task-form";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

const Page = () => {
  return (
    <Provider store={store}>
      <TaskForm />
    </Provider>
  );
};

export default Page;
