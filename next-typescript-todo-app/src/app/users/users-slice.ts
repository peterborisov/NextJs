"use client";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@users/users-types/users-types";
import { useData } from "@hooks/useData";

interface UsersState {
  users: User[];
  user: User;
}

export const initialState: UsersState = {
  users: [],
  user: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
};

const { fetchUser, fetchUsers } = useData();

export const usersSlice = createSlice({
  name: "usersState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export default usersSlice.reducer;
