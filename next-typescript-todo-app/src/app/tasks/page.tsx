"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { Tasks } from "@components/tasks";

const Page = () => {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
};

export default Page;
