import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Postmenu from '../container/Menu/Menu';
import SignUp from '../container/Signup/Signup';
import LogIn from '../container/Login/Login';
import Posts from '../container/GetMenu/GetMenu'
import React from 'react';
import FixedNavbarExample from '../container/NavBar/NavBar'

const RouterComponent = () => {
    return (
        <BrowserRouter>
        <div>
            <FixedNavbarExample />
        <Switch>
            <Route path="/" component={LogIn} exact/>
            <Route path="/signup" component={SignUp} />
            <Route path="/addmenu" component={Postmenu} />
            <Route path="/menu" component={Posts} />   
        </Switch>
        </div>
        </BrowserRouter>
    );
};

export default RouterComponent;
