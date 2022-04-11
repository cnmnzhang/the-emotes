import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
// import Signup from './pages/Signup';

const App = () => {
  return (
    <Router key="router">
      <Routes key="routes">
        <Route path="/" element={<Home />} key="home" />
        <Route path="/create" element={<CreatePost />} key="createPost" />
        <Route path="/analysis" element={<Analysis />} key="analysis" />
        <Route path="/about" element={<About />} key="about" />
        <Route path="/contact" element={<Contact />} key="contact" />
        <Route path="/privacy" element={<Privacy />} key="privacyAgreement" />
        
        {/* <Router path="/signup" element={<Signup />} key="signup" /> */}
      </Routes>
    </Router>
  );
};

export default App;
