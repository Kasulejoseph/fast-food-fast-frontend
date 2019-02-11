import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  SignUp  from '../container/Signup/Signup';
import LogIn from '../container/Login/Login';
import { Provider } from 'react-redux';
import store from '../store';
import { Postmenu } from '../container/Menu/Menu';
import FixedNavbarExample from '../container/NavBar/NavBar'
import React from 'react';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/" component={LogIn} exact />
            <Route path="/signup" component={SignUp} />
            <Route path="/addmenu" component={Postmenu} />
            <Route path="/menu" component={FixedNavbarExample} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default RouterComponent;
