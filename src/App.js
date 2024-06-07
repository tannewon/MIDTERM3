import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { TextProvider } from './components/TextContext';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
   return (
      <ThemeProvider>
         <TextProvider>
            <div className="App">
               <Router>
                  <Navbar />
                  <Home />
               </Router>
            </div>
         </TextProvider>
      </ThemeProvider>

   );
};
export default App; 