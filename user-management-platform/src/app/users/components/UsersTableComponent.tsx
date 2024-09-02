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
    router.push(`/users/${user._id}`);
  };

  const addNewUser = () => {
    router.push(`/users/addUser`);
  };

  return (
    <>
      <Button
        className="mb-4 mt-9"
        data-testid="user-details"
        onClick={addNewUser}
      >
        Add new User
      </Button>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell />
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((user: User) => (
            <Table.Row key={user._id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.address?.city}</Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                {user.phone}
              </Table.Cell>
              <Table.Cell>
                <Button
                  data-testid="user-details"
                  onClick={() => userDetails(user)}
                >
                  User Details
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
