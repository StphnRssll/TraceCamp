import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
          <h3>
              YouTube PhraseFinder
          </h3>
          <form action = "/results" method = "get">
              <input type="text" placeholder="Youtube Video URL" name="vid_url" />
              <input type="text" placeholder="Search" name="key_words" />
              <button type="submit">Submit</button>
          </form>
      </body>
    </div>
  );
}

export default App;
