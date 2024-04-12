"use client";

import { Tasks } from "@components/Tasks";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default async function Page() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
