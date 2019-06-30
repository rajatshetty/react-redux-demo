import React from 'react'
import logo from './logo.svg'
import './App.css'
import store  from './state-manager/store/configureStore'
import { Provider } from 'react-redux'
import  Itemscontainer  from './containers/itemscontainer'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Onboarding from '../src/components/Onboarding'

const App = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/newonboarding" component={Onboarding} />
                </Switch>
            </BrowserRouter>
        </Provider>
        );
}

export default App;

