import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { TextField, Button, Paper, Grid, MenuItem, Select, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ text: task, priority }));
      setTask("");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>Add a New Task</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField label="Task" value={task} onChange={(e) => setTask(e.target.value)} fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select value={priority} fullWidth onChange={(e) => setPriority(e.target.value)}>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button onClick={handleAddTask} variant="contained" color="primary" fullWidth startIcon={<Add />}>Add Task</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TaskInput;
