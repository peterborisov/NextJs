"use client";

import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "flowbite-react";

import type { RootState } from "@app/store/store";
import { BreadcrumbComponent } from "@app/components";
import { useData, useNav } from "@hooks/index";
import { TableComponent, FilterComponent } from "@components/index";
import { CellItem } from "./components/CellItem";

type Props = {
  userId: number;
};

export const UserDetails: FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();
  const { fetchTasks, fetchUser } = useData();

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchTasks());
  }, [dispatch]);

  const { usersState, tasksState } = useSelector((state: RootState) => state);

  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { catchPhrase, bs },
  } = usersState.user;

  const {
    paths: { HOME, USERS, USER },
  } = useNav(name);

  const tasks = tasksState.tasks;
  const userTasks = tasks.filter((task) => task.userId === +userId);

  return (
    <>
      <BreadcrumbComponent breadcrumbItems={[HOME, USERS, USER]} />
      <div className="text-4xl font-bold">{name}</div>
      <div className="text-2xl font-bold">ID: {id}</div>
      <Card className="mx-auto my-4">
        <div className="flex flex-wrap gap-4">
          <CellItem title="User name" value={username} />
          <CellItem title="Email" value={email} />
          <CellItem
            title="Address"
            value={`${street}, ${suite}, ${city}, ${zipcode}`}
          />
          <CellItem title="Geo" value={`${lat}, ${lng}`} />
          <CellItem title="Phone" value={phone} />
          <CellItem title="Web site" value={website} />
          <CellItem title="Company" value={`${catchPhrase}, ${bs}`} />
        </div>
      </Card>
      <div className="text-2xl font-bold">Tasks:</div>
      <FilterComponent />
      <TableComponent data={userTasks} />
    </>
  );
};
