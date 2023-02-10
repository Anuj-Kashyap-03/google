import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import SearhPage from './Components/Search/Search'

const App = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/search" element={<SearhPage />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Routers>
  );
};

export default App;
