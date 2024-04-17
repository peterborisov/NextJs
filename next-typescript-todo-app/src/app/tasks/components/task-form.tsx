import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
      <TextField
        {...register("title")}
        id="outlined-basic"
        label="Task title"
        variant="outlined"
        size="small"
      />
      <Button variant="outlined" size="small" type="submit" onClick={onSubmit}>
        Add task
      </Button>
    </>
  );
};
