import React from "react";
import ViewUsers from './ViewUsers.js';

const suggestedUserList = [
  {
    name: "User A",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg",
    id: 0
  },
  {
    name: "User B",
    img: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg",
    id: 1
  },
  {
    name: "User C",
    img: "https://images.unsplash.com/photo-1615751072497-5f5169febe17",
    id: 2
  }
]

function SuggestedUsers(){
  return (
    <React.Fragment>
      <div className="outlinedDivs">
        <h4>Suggested Users</h4>
      <hr/>
        {suggestedUserList.map((user, index) =>
          <ViewUsers 
            name={user.name}
            img={user.img}
            key={index}
          />
        )}
        </div>
    </React.Fragment>
  );
}

export default SuggestedUsers;