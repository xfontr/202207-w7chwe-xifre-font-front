import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../types/userTypes";

const usersInitialState: User = {
  id: "",
  name: "",
  image: "",
  biography: "",
  contact: {
    friends: [""],
    enemies: [""],
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    signUp: (_, action: PayloadAction<User>) => action.payload,
  },
});

export const usersReducer = usersSlice.reducer;

export const { signUp: signUpActionCreator } = usersSlice.actions;
