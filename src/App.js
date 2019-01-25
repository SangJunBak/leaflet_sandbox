import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './core/store';

import DashboardView from './components/dashboard/DashboardView';

import './App.scss';

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path="/" component = {DashboardView}/>
                </Switch>
            </Router>
        </Provider>
    )
  }
}

export default App;
