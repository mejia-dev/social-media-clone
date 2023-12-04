import React from "react";
import PropTypes from "prop-types";

function User(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired
};

export default User;