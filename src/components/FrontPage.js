import React from "react";
import UserInfo from './UserInfo.js';
import Posts from './Posts.js';
import SuggestedUsers from './SuggestedUsers.js';
import "../App.css";

function FrontPage(){
  return (
    <React.Fragment>
      <div>< UserInfo/></div>
      <div>< Posts/></div>
      <div>< SuggestedUsers/></div>
    </React.Fragment>
  );
}

export default FrontPage;