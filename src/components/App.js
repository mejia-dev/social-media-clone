import React from "react";
import NavBar from './NavBar.js';
import FrontPage from './FrontPage.js';
import '../App.css';

function App(){
  return (
    <React.Fragment>
      <div className = "navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
        < NavBar/>
      </div>
      <br />
      < FrontPage/>
    </React.Fragment>
  );
}

export default App;
