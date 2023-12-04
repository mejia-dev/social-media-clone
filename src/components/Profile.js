import React from "react";
import profilePhoto from '../img/bob.jpg';
import User from './User.js';
import UserLinks from './UserLinks.js';

function Profile(){
  return (
    <React.Fragment>
      <div id="photosHolder">
      <img src={profilePhoto} alt="Current user's profile photo" id="profilePic" />
      </div>
      
      <div class="outlinedDivs" id="nameAlignRight">
        <User name="Ross"/>
      <br/>
      <div id="userLinks">
        <UserLinks />
      </div>
      </div>
      <br></br>
    </React.Fragment>
  );
}

export default Profile;