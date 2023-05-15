import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    opened: false,
  },

  reducers: {
    setModalOpened(state, action) {
      state.opened = true;
    },
    setModalClosed(state, action) {
      state.opened = false;
    },
  },
});

export const { setModalOpened, setModalClosed } = modalSlice.actions;
export default modalSlice.reducer;
