import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import { MiniCartCountProvider } from './contexts/MiniCartCount';
import "regenerator-runtime/runtime.js";
import './global.css'

function App() {
  return (
    <MiniCartCountProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/produtos" component={Products} />
        </Switch>
      </BrowserRouter>
    </MiniCartCountProvider>
  )
}

export default App;