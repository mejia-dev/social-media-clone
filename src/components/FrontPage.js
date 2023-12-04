import React from "react";
import UserInfo from './UserInfo.js';
import Posts from './Posts.js';
import SuggestedUsers from './SuggestedUsers.js';

function FrontPage(){
  return (
    <React.Fragment>
      < UserInfo/>
      < Posts/>
      < SuggestedUsers/>
    </React.Fragment>
  );
}

export default FrontPage;