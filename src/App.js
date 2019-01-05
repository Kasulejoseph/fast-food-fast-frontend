import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts'
import store from './store'
import {Provider} from 'react-redux'
import Postmenu from './components/postForm';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Postmenu />
      <hr/>
        <Posts />
    
      </div>
      </Provider>
    );
  }
}

export default App;
