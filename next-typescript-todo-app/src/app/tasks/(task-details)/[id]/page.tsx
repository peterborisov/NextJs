"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { TaskDetails } from "./taskDetails";

interface Props {
  params: { id: number };
}

const Page = ({ params }: Props) => {
  return (
    <Provider store={store}>
      <TaskDetails taskId={params.id} />
    </Provider>
  );
};

export default Page;
