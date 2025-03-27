import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";
// import ThemeProvider from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const darkMode = useSelector((state) => state.auth.darkMode);


  return (
    <>
      <Header />

      <Router>
        <CssBaseline />

        <Container sx={{ mt: 3 }}>
          <Box sx={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
};

export default App;
