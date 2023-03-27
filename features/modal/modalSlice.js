import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isopen: true,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openmodal: (state) => {
      state.isopen = true;
    },
    closemodal: (state) => {
      state.isopen = false;
    },
  },
});
export const { openmodal, closemodal } = modalSlice.actions;
export default modalSlice.reducer;
