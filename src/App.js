import React from "react";
import routes from "./routes";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
