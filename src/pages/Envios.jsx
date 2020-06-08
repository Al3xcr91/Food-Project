import React, { Component } from 'react';
import EnvioForm from '../components/EnvioForm';
import './styles/Envios.css';

export class Envios extends Component {
  render() {
    return (
      <div className='envios'>
        <h1 className='envios__title'>Fire #7 Burgers</h1>
        <EnvioForm />
      </div>
    )
  }
}

export default Envios
