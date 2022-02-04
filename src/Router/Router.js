import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Dashboard from '../Pages/Dashboard/Dashboard'

function RouterDom() {
    return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Signin}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/Dashboard" component={Dashboard}/>

                    </Switch>
                    </BrowserRouter>
    )
}
export default RouterDom