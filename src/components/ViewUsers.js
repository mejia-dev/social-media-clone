import React from "react";
import PropTypes from "prop-types";



function ViewUsers(props){
  return (
    <React.Fragment>
      <img class="userProfilePic" src={props.img} alt="user's profile image" />
      <h4>{props.name}</h4>
      <button>Follow</button>
      <hr/>
    </React.Fragment>
  );
}

ViewUsers.propTypes = {
  name: PropTypes.string
};

export default ViewUsers;