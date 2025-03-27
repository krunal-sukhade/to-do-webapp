import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "tasks/fetchWeather",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://wttr.in/Amravati?format=%C+%t"); // Fetching weather condition + temperature

      if (!response.data) {
        throw new Error("Invalid weather data received");
      }

      return response.data; // Example: "Clear +30°C"
    } catch (error) {
      console.error("Weather API Error:", error.message);
      return rejectWithValue("Failed to fetch weather");
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: JSON.parse(localStorage.getItem("tasks")) || [],
    weather: null,
    loading: false,
    error: null
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
    removeTask: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("tasks", JSON.stringify(state.items));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload; // Weather stored as a string
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch weather";
      });
  }
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
