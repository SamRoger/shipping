import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Destination from './Destinations';

class App extends Component {
  render() {
    return (
    <div className="App">
        <BrowserRouter>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/destination">Destinations</Link></li>
        </ul>



            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/destination" compoment={Destination} />
            </div>
        </BrowserRouter>
    </div>
        );
    }
}

export default App;
