import React from "react";
import UserTweets from './UserTweets.js';
import Following from './Following.js';
import Followers from './Followers.js';

function UserLinks(){
  return (
    <React.Fragment>
      < UserTweets/>
      < Following/>
      < Followers/>
    </React.Fragment>
  );
}

export default UserLinks;
