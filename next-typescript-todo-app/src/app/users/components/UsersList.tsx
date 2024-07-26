import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div>
      <UsersTableComponent data={users} />
    </div>
  );
};
