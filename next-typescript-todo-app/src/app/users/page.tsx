"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { UsersList } from "@users-components/index";

const Page = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default Page;
