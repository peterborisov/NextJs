import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BreadcrumbComponent } from "@components/index";

import type { RootState } from "@app/store/store";
import { useData, useNav } from "@hooks/index";
import { UsersTableComponent } from "./";

export const UsersList = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = useData();
  const {
    paths: { HOME, USERS },
  } = useNav();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.usersState.users);

  return (
    <>
      <BreadcrumbComponent breadcrumbItems={[HOME, USERS]} />
      <UsersTableComponent data={users} />
    </>
  );
};
