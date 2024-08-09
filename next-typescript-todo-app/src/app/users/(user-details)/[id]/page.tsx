"use client";

import React from "react";
import { UserDetails } from "./UserDetails";

interface Props {
  params: { id: number };
}

const Page = ({ params }: Props) => {
  return <UserDetails userId={params.id} />;
};

export default Page;
