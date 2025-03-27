import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice";
import authReducer from "../features/authSlice";
import themeReducer from "../features/themeSlice"; // Import themeSlice

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    theme: themeReducer, // Add theme reducer here
  },
});

export default store;
