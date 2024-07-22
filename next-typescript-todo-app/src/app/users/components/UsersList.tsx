import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@app/store/store";
import { fetchUsers } from "@users/users-slice";
import { UsersTableComponent } from "./UsersTableComponent";

export const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.usersState);

  return (
    <div>
      <UsersTableComponent data={data.users} />
    </div>
  );
};
