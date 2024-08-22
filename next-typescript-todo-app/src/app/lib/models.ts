import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    min: 3,
    max: 20,
  },
  name: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  address: {
    type: Object,
    unique: true,
    min: 3,
    max: 20,
  },
  phone: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  website: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
  },
  company: {
    type: Object,
    unique: true,
    min: 3,
    max: 20,
  },
});

const taskSchema = new Schema({
  userId: {
    type: Number,
  },
  id: {
    type: Number,
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
