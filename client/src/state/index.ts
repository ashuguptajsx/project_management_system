import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface initialStateType {
  isSidebarCollapsed: boolean;
}

const initialState: initialStateType = {
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
        state.isSidebarCollapsed = action.payload;
    },
  },
});

export const {setIsSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer;
