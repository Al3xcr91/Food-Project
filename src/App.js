import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

