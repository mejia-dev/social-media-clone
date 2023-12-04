import React from "react";
import NewPosts from './NewPosts.js';
import Feed from './Feed.js';

function Posts(){
  return (
    <React.Fragment>
      < NewPosts/>
      < Feed/>
    </React.Fragment>
  );
}

export default Posts;