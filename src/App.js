import React from "react";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter</h1>
      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  )
}

export default App;