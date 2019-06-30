import React from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import App from '../App'
import Onboarding from '../components/Onboarding'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/newonboarding" component={Onboarding} />
                <Route path="/contact" component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes };