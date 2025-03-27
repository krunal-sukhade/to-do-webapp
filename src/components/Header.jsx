import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState,useEffect } from "react";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  
  
 

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className="flex start" variant="h6" sx={{ flexGrow: 1 }}>To-Do Task Manager</Typography>
        <ThemeSwitcher />
        {isAuthenticated ? (
          <Button color="inherit" onClick={() => dispatch(logout())}>Logout</Button>
        ) : (
          <Button color="inherit" onClick={() => dispatch(login())}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
