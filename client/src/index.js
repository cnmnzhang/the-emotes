import React from "react";
import ReactDOM from "react-dom";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
