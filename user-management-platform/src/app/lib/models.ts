import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: Object,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  company: {
    type: Object,
  },
});

const taskSchema = new Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

export const User = models.User || model("User", userSchema);
export const Task = models.Task || model("Task", taskSchema);
