import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, TextInput, Label } from "flowbite-react";
import { FormInputs } from "@tasks/task-types/task-types";
import { addTask } from "@tasks/tasks-slice";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit = handleSubmit(async (data: FormInputs) => {
    dispatch(addTask(data));
    router.push(`/tasks`);
  });

  return (
    <>
      <Label htmlFor="title" value="Task Title" />
      <TextInput {...register("title")} id="title" />
      <Button size="small" type="submit" onClick={onSubmit}>
        Add task
      </Button>
    </>
  );
};
