import React, { useState, useEffect } from 'react';
//post form, allow user to input infomation such as post title and post description
const PostForm = ({ addEntry}) => {
  const [title, setTitle] = useState('');
  const [body, setDescription] = useState('');

  useEffect(() => {
    setTitle(addEntry.title);
    setDescription(addEntry.description);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert('Please enter title and description of the post!');
      return;
    }

    const entry = {
      title,
      body,
    };

    // clear the form
    addEntry(entry);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2 class= "add-post">Add Post:</h2>
      <form onSubmit={handleSubmit}>
      
        <label id = "title"> Title: </label>
        <input type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        
        <label id = "description"> Description: </label>
        <input type="text" 
          value={body} 
          onChange={(e) => setDescription(e.target.value)}
          required 
        />
      
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PostForm;