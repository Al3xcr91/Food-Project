import React, { Component } from 'react';
import EnvioForm from '../components/EnvioForm';
import './styles/Envios.css';

export class Envios extends Component {
  render() {
    return (
      <div className='envios'>
        <EnvioForm />
      </div>
    )
  }
}

export default Envios
