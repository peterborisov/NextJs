import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbComponent } from "@app/components";

import type { RootState } from "@app/store/store";
import { useData } from "@hooks/useData";
import { UsersTableComponent } from "./UsersTableComponent";

export const UsersList = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = useData();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.usersState.users);

  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/users", label: "Users List" },
  ];

  return (
    <>
      <BreadcrumbComponent breadcrumbItems={breadcrumbItems} />
      <UsersTableComponent data={users} />
    </>
  );
};
