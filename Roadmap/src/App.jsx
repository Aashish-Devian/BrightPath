import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./LoginPage";
import BrightPathAI from "./BrightPathAI";
import SignupPage from "./SignupPage";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<BrightPathAI />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
