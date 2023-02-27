import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ponudi from './components/pages/Ponudi';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ponudi' component={Ponudi} />
          <Route path='/aboutUs' component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
