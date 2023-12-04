import React from "react";
import NewPosts from './NewPosts.js';
import Feed from './Feed.js';

const mainPostList = [
  {
    name: 'Thato',
    content: 'I love React!',
    id: 1
  },
  {
    name: 'Haley',
    content: 'I love JS!',
    id: 2
  },
  {
    name: 'React Bot',
    content: 'React is awesome!',
    id: 3
  }
]

function Posts(){
  return (
    <React.Fragment>
      <hr/ >
      {mainPostList.map((newPost, index) =>
      < NewPosts name={newPost.name}
      content={newPost.content}
      key={index}/>
      )}
      < Feed/>
    </React.Fragment>
  );
}

export default Posts;