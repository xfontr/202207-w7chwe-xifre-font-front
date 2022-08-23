import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserInterface {
  isVisible: boolean;
  state: "error" | "success" | "loading";
}

const uiInitialState = {
  isVisible: false,
  state: "loading",
} as IUserInterface;

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    display: (
      previousState: IUserInterface,
      action: PayloadAction<boolean>
    ) => ({ ...previousState, isVisible: action.payload }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { display: displayActionCreator } = uiSlice.actions;
