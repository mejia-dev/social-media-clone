import React from "react";
import Profile from './Profile.js';
import Summary from './Summary.js';

function UserInfo(){
  return (
    <React.Fragment>
      <h1>User Info</h1><hr/>
      < Profile/>
      < Summary/>
    </React.Fragment>
  );
}

export default UserInfo;