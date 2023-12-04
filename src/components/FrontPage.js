import React from "react";
import UserInfo from './UserInfo.js';
import Posts from './Posts.js';
import SuggestedUsers from './SuggestedUsers.js';
import "../App.css";

function FrontPage(){
  return (
    <React.Fragment>
      <div class="primaryDivs">< UserInfo/></div>
      <div class="primaryDivs">< Posts/></div>
      <div class="primaryDivs">< SuggestedUsers/></div>
    </React.Fragment>
  );
}

export default FrontPage;