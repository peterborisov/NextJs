import { FormInputs } from "@task-types/task-types";
import { addTask } from "@tasks/tasks-slice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit = handleSubmit(async (data: FormInputs) => {
    dispatch(addTask(data));
  });

  return (
    <>
      <input {...register("title")} />
      <button type="submit" onClick={onSubmit}>
        Add task
      </button>
    </>
  );
};
