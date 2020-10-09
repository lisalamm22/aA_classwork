import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from "./greeting_container";
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container'
import {AuthRoute} from '../util/route_util'

const App = () => {
    return(
        <div>
            <header>
                <h1>Bench BnB</h1>
                <GreetingContainer />
            </header>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App