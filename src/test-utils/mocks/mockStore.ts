import { configureStore, createReducer } from "@reduxjs/toolkit";
import { User } from "../../store/types/userTypes";

const initialState: User = {
  id: "1",
  name: "Pepe",
  image: "#",
  biography: "I like cars",
  contacts: {
    friends: ["Jose"],
    enemies: ["Pedro"],
  },
};

const mockReducer = createReducer<User>(initialState, (builder) => {
  builder.addDefaultCase((state: User) => state);
});

const mockStore = configureStore({ reducer: { users: mockReducer } });

export default mockStore;
