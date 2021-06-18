import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './pages/Products/Products'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/produtos" component={Products} />
        </Switch>
    </BrowserRouter>
    , document.getElementById("root")
);
