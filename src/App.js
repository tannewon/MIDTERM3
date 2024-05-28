import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
// App.js
// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>GitHub Users Data</h1>
        <Search />
      </div>
    </div>
  );
};
export default App;
