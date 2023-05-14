import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authSlice,
  },
});
