import React from "react";
import PropTypes from "prop-types";

function NewPosts(props) {
  return (
    <React.Fragment>
        <form id="newPosts">
          {
          <label>
            <p>{props.body} <input name="newPost" /></p>
          </label>
          
          }
        </form>
      
    </React.Fragment>
  )
}

NewPosts.propTypes = {
  body: PropTypes.string, 
}

export default NewPosts;
