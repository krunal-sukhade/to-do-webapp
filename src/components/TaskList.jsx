// TaskList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, fetchWeather } from "../features/tasksSlice";
import { Card, CardContent, Typography, IconButton, Box, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { motion } from "framer-motion";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const weather = useSelector((state) => state.tasks.weather);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);


  

  return (
    <Box>
      {loading ? (
        <Typography variant="h6" align="center">Loading weather...</Typography>
      ) : error ? (
        <Typography variant="h6" align="center" color="error">{error}</Typography>
      ) : weather ? (
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Current Temperature at your location: {weather}
                </Typography>
                
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : null}

      <Grid container spacing={2}>
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                {/* <Typography variant="body1" gutterBottom>{task.text}</Typography> */}
                <h4 className="text-xl"> {task.text} </h4>
                <h3 style={{ color: task.priority === "High" ? "red" : task.priority === "Medium" ? "orange" : "green" }}>
               Task Priority: {task.priority}
                </h3>

                {/* <h1 className="">{task.priority} priority</h1> */}

                <IconButton onClick={() => dispatch(removeTask(index))} color="secondary">
                  <Delete />
                </IconButton>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskList;