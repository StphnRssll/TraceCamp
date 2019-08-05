import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAsteroids } from './nasaWorker';

function App() {

  const [startDate, setStartDate ] = useState(new Date());

  getAsteroids("2018-06-13","2018-06-19").then(
    (data) => console.log(data),
    (error) => console.log(error)
  )

    return (
      <div className="App">
         Test
      </div>
    );
}

export default App;
