import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Postmenu from '../components/postForm';
import SignUp from '../components/signupComponent';
import LogIn from '../components/loginComponent';
import Posts from '../components/posts'
import Clock from '../components/clock'
import React from 'react';
import FixedNavbarExample from '../components/navbarComponent'

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
            <Route path="/clock" component={Clock} />
        </Switch>
        </div>
        </BrowserRouter>
    );
};

export default RouterComponent;
