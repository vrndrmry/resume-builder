import React from "react";
import Body from "./components/Body/Body";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/resumebuilder" element={<Body/>}></Route>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
