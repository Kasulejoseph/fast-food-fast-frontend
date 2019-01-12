import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import RouterComponent from './Router/router'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <RouterComponent/> 
      </div>
      </Provider>
    );
  }
}

export default App;
