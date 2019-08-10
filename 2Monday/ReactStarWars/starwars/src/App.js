import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPlanets } from './starWarsApiWorker'

function App() {

  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

 

  useEffect( () => {
    getPlanets(page).then(
      (planets) => setPlanets(planets.data.results),
      (error) => console.log(error)
    )
  }, [page])

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Star Wars Planet Search!</h2>
        </div>

          <div className="App">
          <h1>Star Wars Planets!</h1>
          <input type ="number" onChange={(event) => setPage(event.target.value)} value={page} min="1" max="7" />
         
          <p>{ planets.map((planet) => planet.name) }</p>
        </div>
      </div>
    );
}

export default App;
