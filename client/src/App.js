import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
// import Signup from './pages/Signup';

const App = () => {
  return (
    <Router key="router">
      <Routes key="routes">
        <Route path="/" element={<Home />} key="home" />

        <Route path="/create" element={<CreatePost />} key="createPost" />
        {/* <Router path="/signup" element={<Signup />} key="signup" /> */}
      </Routes>
    </Router>
  );
};

export default App;
