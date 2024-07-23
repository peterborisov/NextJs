"use client";

import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Card } from "flowbite-react";

import { CellItem } from "./components/CellItem";
import type { RootState } from "@app/store/store";
import { fetchUser } from "@users/users-slice";

type Props = {
  userId: number;
};

export const UserDetails: FC<Props> = ({ userId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.usersState);

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
  } = data.user;

  const handleBackToUsers = () => {
    router.push("/users");
  };

  return (
    <>
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

      <Button onClick={handleBackToUsers}>All Users</Button>
    </>
  );
};
