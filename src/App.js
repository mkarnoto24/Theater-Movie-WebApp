import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/Home';
import DetailMovie from '../src/pages/DetailMovie';
import Booking from '../src/pages/Booking';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detailmovie/:id" component={DetailMovie} />
            <Route path="/booking/:id" component={Booking} />
            <Route path="/login/user" component={Login} />
            <Route path="/register/user" component={Register} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App