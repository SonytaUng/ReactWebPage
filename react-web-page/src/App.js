import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import './App.css';
import './PostList.css';
import './PostForm.css';

function App() {
  const [entries, setEntries] = useState([]);
 
  useEffect(() => {
    // Fetch entries from the backend when the component mounts
    fetchEntries();
  }, []);

  // fetch fake API for testing and prototyping for get post informationS
  const fetchEntries = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    setEntries(data);
  };

  // add post entry to the end of the post list
  const addEntry = async (entry) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    const newEntry = await response.json();
    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      <h1 class = "post-info">Post Information</h1>
      <PostForm addEntry={addEntry} />
      <PostList entries={entries} />
    </div>
  );
}

export default App;

