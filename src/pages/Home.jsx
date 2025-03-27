import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Myhome from "../components/Myhome";

const Home = () => (
  <div>
    <TaskInput />
    <TaskList />
    {/* <Myhome></Myhome> */}
  </div>
);

export default Home;
