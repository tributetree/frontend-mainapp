import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Pricing, AboutUs, Login, Dashboard } from "./pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
