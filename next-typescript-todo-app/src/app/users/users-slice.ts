"use client";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { User } from "@users/users-types/users-types";
import { useData } from "@hooks/useData";

interface UsersState {
  users: User[];
  user: User;
}

export const initialState: UsersState = {
  users: [],
  user: {},
};

const { fetchUser, fetchUsers } = useData();

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        _id: uuidv4(),
        name: action.payload.name,
        email: action.payload.email,
        city: action.payload.city,
        phone: action.payload.phone,
      };
      state.users = [...state.users, newUser];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
