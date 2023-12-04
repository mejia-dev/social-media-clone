import React from "react";
import PropTypes from "prop-types";



function ViewUsers(props){
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <button>Follow</button>
    </React.Fragment>
  );
}

ViewUsers.propTypes = {
  name: PropTypes.string
};

export default ViewUsers;