import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, TextInput, Label, Card } from "flowbite-react";

import { UserFormInputs } from "@users/users-types/users-types";
import { addUser } from "@users/users-slice";

export const AddUserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit } = useForm<UserFormInputs>();

  const onSubmit = handleSubmit(async (data: UserFormInputs) => {
    dispatch(addUser(data));
    router.push(`/users`);
  });

  return (
    <Card className="mx-auto flex max-w-lg flex-col gap-4">
      <Label htmlFor="name" value="Name" />
      <TextInput {...register("name")} id="name" />
      <Label htmlFor="email" value="Email" />
      <TextInput {...register("email")} id="email" />
      <Label htmlFor="city" value="City" />
      <TextInput {...register("city")} id="city" />
      <Label htmlFor="phone" value="Phone" />
      <TextInput {...register("phone")} id="phone" />
      <Button type="submit" onClick={onSubmit}>
        Add new User
      </Button>
    </Card>
  );
};
