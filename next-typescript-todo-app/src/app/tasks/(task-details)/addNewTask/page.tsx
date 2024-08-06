"use client";

import { Provider } from "react-redux";
import { store } from "@app/store/store";
import { TaskForm } from "@tasks/components";

const Page = () => {
  return (
    <Provider store={store}>
      <TaskForm />
    </Provider>
  );
};

export default Page;
