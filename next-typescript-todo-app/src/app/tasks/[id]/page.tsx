"use client";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import { TaskDetails } from "./taskDetails";

interface Props {
  params: { id: number };
}

export default function Page({ params }: Props) {
  return (
    <Provider store={store}>
      <TaskDetails taskId={params.id} />
    </Provider>
  );
}
