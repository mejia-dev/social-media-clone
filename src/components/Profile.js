import React from "react";
import profilePhoto from '../img/bob.jpg';
import User from './User.js';
import UserLinks from './UserLinks.js';

function Profile(){
  return (
    <React.Fragment>
      <User
        name="Ross"
      />
      <img src={profilePhoto} alt="Current user's profile photo" />
      <br/>
      < UserLinks/>
    </React.Fragment>
  );
}

export default Profile;