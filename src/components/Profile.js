import React from "react";
import profilePhoto from '../img/bob.jpg';
import User from './User.js';
import UserLinks from './UserLinks.js';

function Profile(){
  return (
    <React.Fragment>
      <img src={profilePhoto} alt="Current user's profile photo" id="profilePic" />
      <User
        name="Ross"
      />
      <br/>
      < UserLinks id="userLinks"/>
    </React.Fragment>
  );
}

export default Profile;