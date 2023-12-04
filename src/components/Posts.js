import React from "react";
import NewPosts from './NewPosts.js';
import ViewPosts from './ViewPosts.js';


const mainUserList = [
  {
    name: 'Ross',
    content: 'my story',
    timestamp: "10/11/2023 16:08:53",
    id: 0
  }, 
]
const mainPostList = [
  {
    name: 'Thato',
    content: 'I love React!',
    timestamp: "10/12/2023 16:08:53", 
    id: 1
  },
  {
    name: 'Haley',
    content: 'I love JS!',
    timestamp: "10/29/2023 11:26:30",
    id: 2
  },
  {
    name: 'React Bot',
    content: 'React is awesome!',
    timestamp: "10/31/2023 06:09:23",
    id: 3
  }
]

function Posts(){
  return (
    <React.Fragment>
      
      
      <div id="newPost">
      {mainUserList.map((newPost, index) =>
      < NewPosts name={newPost.user}
      content={newPost.content}
      timestamp={newPost.timestamp}
      key={index}/>
      )}
      </div>

      <div className="outlinedDivs">
        {mainPostList.map((viewPosts, index) =>
        < ViewPosts name={viewPosts.name}
        content={viewPosts.content}
        timestamp={viewPosts.timestamp}
        key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Posts;