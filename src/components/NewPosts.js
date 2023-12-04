import React from "react";

function NewPosts() {
  return (
    <React.Fragment>
        <form id="newPosts">
          <input type="text" required>What's happening?</input>
          <button type="submit">Post!</button>
        </form>
      
    </React.Fragment>
  )
}

export default NewPosts;