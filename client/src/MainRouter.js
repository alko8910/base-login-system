import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from './core/Home'
import Signup from "./user/SignUp";
import Signin from "./auth/Signin.js";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./user/Profile.js";


const MainRouter = () => {
    return (
        <>
        <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />
               <PrivateRoute path='/user/:userId' component={Profile} />
        </Switch>
          
        </>
    )
}

export default MainRouter;



