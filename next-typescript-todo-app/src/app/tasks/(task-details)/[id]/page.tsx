"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/store/store";
import { TaskDetails } from "./TaskDetails";

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
