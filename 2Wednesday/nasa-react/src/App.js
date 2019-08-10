import React from 'react';
//import './App.css';
import Apod from './components/Apod'
import DatePicker from './components/DatePicker';
import {Route} from 'react-router-dom';
import Apods from './components/Apods'


const App = () => {
  return (
    <div>
      <Route path="/apods/:date" component={Apods} />
      <Route path="/apods/:date" component={DatePicker} />
      <Route path="/apods/:date" component={Apod} />
    </div>
  );
}

export default App;
