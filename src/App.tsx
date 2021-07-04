import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventProvider from './context/EventContext';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import './App.css';

const App = () => (
  <div className="App">
    <EventProvider>
      <Router>
        <Switch>
          <Route path="/add">
            <NewEvent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </EventProvider>
  </div>
);

export default App;
