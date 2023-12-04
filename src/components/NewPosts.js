import React from "react";

function NewPosts() {
  return (
    <React.Fragment>
        <form id="newPosts">
          {
          <label>
            What's happening? <input name="newPost" />
          </label>
          
          }
        </form>
      
    </React.Fragment>
  )
}

export default NewPosts;