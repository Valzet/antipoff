import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    modal: modalSlice
  },
});
