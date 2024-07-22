"use client";

import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Card } from "flowbite-react";

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

  const handleBackToUsers = () => {
    router.push("/users");
  };

  const styles = {
    p: "font-normal text-gray-700 dark:text-gray-400",
    h5: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
  };
  return (
    <>
      <Card className="mx-auto my-44">
        <p className={styles.p}>User ID: {userId}</p>
      </Card>
      <Button onClick={handleBackToUsers}>All Users</Button>
    </>
  );
};
