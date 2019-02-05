import React, { Component } from 'react';
import RouterComponent from './Router/router';
import { hot } from 'react-hot-loader';
import { ToastContainer } from 'react-toastify';
import './App';
class App extends Component {
  render() {
    return (
      <div className="App">
      <ToastContainer />
        <RouterComponent />
      </div>
    );
  }
}

export default hot(module)(App);
