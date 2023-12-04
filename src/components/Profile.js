import React from "react";
import Picture from './Picture.js';
import Name from './Name.js';
import UserLinks from './UserLinks.js';


function Profile(){
  return (
    <React.Fragment>
      < Picture/>
      < Name/>
      < UserLinks/>
    </React.Fragment>
  );
}

export default Profile;