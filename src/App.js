import React from 'react';
import './pages/styles/App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Envios from './pages/Envios';
import Contacto from './pages/Contacto';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
          <Route exact path='/envios'>
            <Envios />
          </Route>
          <Route exact path='/contacto'>
            <Contacto />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

