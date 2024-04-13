"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Tasks } from "./tasks/tasks";

export default function Page() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
