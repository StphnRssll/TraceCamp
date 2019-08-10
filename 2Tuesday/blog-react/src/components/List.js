import React, { useState, useContext } from 'react';
import { blogContext } from './blogContext'

// where your context is

function List() {
    const [title, setTitle] = useState("Edit title");
    const [body, setBody] = useState("Edit text");
    const [blogList,setBlogList] = useContext(blogContext);

    const onSubmit = (event) => {
      event.preventDefault();
      setBlogList([...blogList,{"title":title,"body":body, "id": Math.random()}])
    }

    return (
      <div>
        <h1>My Blog</h1>
        
        <form onSubmit = {onSubmit}>
          <label>
              Title:
              <input type="text" name="title" onChange = {(e)=>{setTitle(e.target.value)}}/>
          </label>
          <label>
              Body:
              <input type="text" name="body" onChange = {(e)=>{setBody(e.target.value)}}/>
          </label>
          <input type="submit" value="Submit" />
        </form>   
      
        <ul>
        {blogList.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </li>
        ))}
        </ul>
        <pre> {JSON.stringify(blogList, null, 2)}</pre>

      </div>  
    );
}

export default List;