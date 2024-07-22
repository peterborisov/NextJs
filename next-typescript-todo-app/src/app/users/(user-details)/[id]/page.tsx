"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@app/store/store";
import { UserDetails } from "./UserDetails";

interface Props {
  params: { id: number };
}

const Page = ({ params }: Props) => {
  return (
    <Provider store={store}>
      <UserDetails userId={params.id} />
    </Provider>
  );
};

export default Page;
