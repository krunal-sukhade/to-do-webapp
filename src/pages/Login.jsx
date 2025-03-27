import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { Button, Typography, Box } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Box textAlign="center" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>Please login to continue</Typography>
      <Button variant="contained" color="primary" onClick={() => dispatch(login())}>Login</Button>
    </Box>
  );
};

export default Login;
