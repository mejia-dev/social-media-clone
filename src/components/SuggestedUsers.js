import React from "react";
import ViewUsers from './ViewUsers.js';

const suggestedUserList = [
  {
    name: "User A",
    id: 0
  },
  {
    name: "User B",
    id: 1
  },
  {
    name: "User C",
    id: 2
  }
]

function SuggestedUsers(){
  return (
    <React.Fragment>
      <h1>Suggested Users</h1>
      <hr/>
        {suggestedUserList.map((user, index) =>
          <ViewUsers name={user.name}
            key={index}/>
        )}
    </React.Fragment>
  );
}

export default SuggestedUsers;