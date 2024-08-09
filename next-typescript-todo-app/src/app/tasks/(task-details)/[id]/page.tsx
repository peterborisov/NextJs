"use client";

import React from "react";
import { TaskDetails } from "./TaskDetails";

interface Props {
  params: { id: number };
}

const Page = ({ params }: Props) => {
  return <TaskDetails taskId={params.id} />;
};

export default Page;
