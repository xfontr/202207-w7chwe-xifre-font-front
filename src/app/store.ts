import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uiReducer } from "../store/slices/uiSlice";
import { usersReducer } from "../store/slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
