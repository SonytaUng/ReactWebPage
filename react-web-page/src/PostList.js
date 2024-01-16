import React from 'react';

// list all post infomation that fetch from the free fake api and user input
const PostList = ({ entries }) => {
    
  return (
    <div>
      <h2 class="post-list">Post List:</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <b class="title">Title: </b>  {entry.title},
            <b class ="description">Description:</b> {entry.body},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
