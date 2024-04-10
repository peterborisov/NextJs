import { FormInputs, Task } from "@task-types/task-types";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { uuid } from "uuidv4";

interface Props {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const TaskForm: FC<Props> = ({ tasks, setTasks }) => {
  const initialTask = {
    id: uuid(),
    title: "",
    completed: false,
  };
  const { register, handleSubmit } = useForm<FormInputs>();
  const [newTask, setNewTask] = useState(initialTask);

  const onSubmit = (data: FormInputs) => {
    setNewTask({
      id: uuid(),
      title: data.title,
      completed: false,
    });

    setTasks([...tasks, newTask]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      <input type="submit" />
    </form>
  );
};
