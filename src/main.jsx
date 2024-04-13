import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Loader from "./Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <div className=" bg-black " >
    <App />
    {/* <Loader/> */}
    {/* <CircularProgress /> */}
  </div>
);
