import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: JSON.parse(localStorage.getItem("auth")) || false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(true));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("auth", JSON.stringify(false));
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    }
  },
});



export const { login, logout , setDarkMode} = authSlice.actions;
export default authSlice.reducer;
