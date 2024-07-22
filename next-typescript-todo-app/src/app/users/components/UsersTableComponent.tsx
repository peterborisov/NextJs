import { FC } from "react";
import { useRouter } from "next/navigation";
import { Button, Table } from "flowbite-react";
import { User } from "@users/users-types/users-types";

interface TableProps {
  data: User[];
}

export const UsersTableComponent: FC<TableProps> = ({ data }) => {
  const router = useRouter();

  const userDetails = (user: User) => {
    router.push(`/users/${user.id}`);
  };

  return (
    <>
      <div className="my-4"></div>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell align="right">Phone</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((user: User) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.address.city}</Table.Cell>
              <Table.Cell
                className="flex items-center justify-end gap-4"
                align="right"
              >
                {user.phone}
                <Button onClick={() => userDetails(user)}>User Details</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
