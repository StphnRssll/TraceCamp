import React from 'react';
// from ^^" , { Component } "
//import './App.css';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Detail from "./Components/Detail";
import List from "./Components/List";
import Update from "./Components/Update";


function App() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create/">Create</NavLink>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/create/" exact component={Create} />
      <Route path="/list/" exact component={List} />
      <Route path="/detail/:id" exact component={Detail} />
      <Route path="/update/:id" exact component={Update} />
      </Router>
    </div>
  )
}

export default App;
