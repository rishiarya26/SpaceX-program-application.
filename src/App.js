import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index.jsx";

function App() {
  return <Route path="/" exact component={Dashboard} />;
}

export default App;
