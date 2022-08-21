import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/userTypes";

const usersInitialState = false as User | false;

export const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    signUp: (_, action: PayloadAction<User>) => action.payload,
    addFriend: (previousState, action: PayloadAction<string>) => ({
      ...(previousState as User),
      contacts: {
        ...(previousState as User).contacts,
        friends: [...(previousState as User).contacts.friends, action.payload],
      },
    }),
    addEnemy: (previousState, action: PayloadAction<string>) => ({
      ...(previousState as User),
      contacts: {
        ...(previousState as User).contacts,
        enemies: [...(previousState as User).contacts.enemies, action.payload],
      },
    }),
  },
});

export const usersReducer = usersSlice.reducer;

export const { signUp: signUpActionCreator } = usersSlice.actions;
export const { addFriend: addFriendActionCreator } = usersSlice.actions;
export const { addEnemy: addEnemyActionCreator } = usersSlice.actions;
