import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventProvider from './context/EventContext';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Event from './pages/Event';
import './App.css';

const App = () => (
  <div className="App">
    <EventProvider>
      <Router>
        <Nav />
        <div className="app_container">
          <Switch>
            <Route path="/add">
              <NewEvent />
            </Route>
            <Route path="/event/:id">
              <Event />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </EventProvider>
  </div>
);

export default App;
