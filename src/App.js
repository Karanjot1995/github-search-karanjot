import React from "react";
import "./App.css";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

// https://api.github.com/search/repositories?q=html
function App() {

  return (
    <div className="d-flex flex-row m-2"> 
      <div className="col-md-3 d-none d-md-block">
        <Sidebar/>
      </div>
      <div className="col-md-9 col-12">
        <Container/>
      </div>
    </div>
  );
}

export default App;