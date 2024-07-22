"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { TasksList } from "./components";

const Page = () => {
  return (
    <Provider store={store}>
      <TasksList />
    </Provider>
  );
};

export default Page;
