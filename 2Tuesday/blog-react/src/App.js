import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.css';
import List from './components/List';
import { BlogProvider } from './components/blogContext'

function App() {
  return(
    <BlogProvider>
      <List />
    </BlogProvider>    
  );
}

export default App;
