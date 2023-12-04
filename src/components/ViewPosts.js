import React from "react";
// import NewPosts from "./NewPosts";
import PropTypes from "prop-types";

function ViewPosts(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.content}</p>
      <p>{props.timestamp}</p>
      <hr />
    </React.Fragment>
  )
}

ViewPosts.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string ,
  timestamp: PropTypes.string
}

export default ViewPosts;