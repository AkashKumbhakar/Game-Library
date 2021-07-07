import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Game from './components/tictactoefile/Game';
import Board from './components/snake/Board.jsx';


function App() {
  return (
    <div className="App">
      <br /><br />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Game" component={Game} />
		  <Route path="/Board" component={Board} />
		  </Switch>
      </Router>
    </div>
  );
}

export default App;
