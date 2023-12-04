import React from "react";
import NavBar from './NavBar.js';
import FrontPage from './FrontPage.js';
import '../App.css';

function App(){
  return (
    <React.Fragment>
      <div className = "navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
      <a href="#"><i class="fa fa-fw fa-exclamation"></i> Notifications</a>
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Messages</a>
        {/* < NavBar/> */}
        <a href="#"><i class="fa fa-fw fa-twitter"></i> Tweet</a>
        <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
      </div>
      <br />
      < FrontPage/>
    </React.Fragment>
  );
}

export default App;
