import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './core/store';

import Dashboard from './components/views/Dashboard';

import './App.scss';

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
            <Router>
                <Route path="/" component = {Dashboard}/>
            </Router>
        </Provider>
    )
  }
}

export default App;
