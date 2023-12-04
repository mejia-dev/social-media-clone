import React from "react";
import Profile from './Profile.js';
import Summary from './Summary.js';

function UserInfo(){
  return (
    <React.Fragment>
      < Profile/>
      < Summary/>
    </React.Fragment>
  );
}

export default UserInfo;