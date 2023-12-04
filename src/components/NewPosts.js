import React from "react";
import PropTypes from "prop-types";

function NewPosts(props) {
  return (
    <React.Fragment>
        <form id="newPosts">
          {
          <label>
            <h4>Ross</h4> <br/>
            Post: 
            <input name="content"/>
<br/>
            time: {props.timestamp}
          </label>
          
          }
          <br/>
          <button type="submit">Submit</button>
        </form>
      
    </React.Fragment>
  )
}

NewPosts.propTypes = {
  user: PropTypes.string,
  content: PropTypes.string ,
  timestamp: PropTypes.string
}

export default NewPosts;
