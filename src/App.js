import React from "react";
import "./App.css";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

function App() {
  const [showMenu, setshowMenu] = React.useState(false);

  return (
    <div className="d-flex flex-row"> 
      <button onClick={()=>setshowMenu(!showMenu)} className="d-sm-block d-md-none menu-button">|||</button>
      <div className={`col-md-3 p-md-3 menu d-md-block ${showMenu? 'd-block':'d-none'}`}>
        <Sidebar/>
      </div>
      <div className="col-md-9 col-12 container">
        <Container/>
      </div>
    </div>
  );
}

export default App;