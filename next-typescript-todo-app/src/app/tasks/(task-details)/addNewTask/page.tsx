"use client";

import { TaskForm } from "../../components";
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
