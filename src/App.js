import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Time from './components/Time';
import Weather from './components/Weather';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Route exact path="/" component={ Home } />
        <Route path="/time" component={ Time } />
        <Route path="/weather" component={ Weather } />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
