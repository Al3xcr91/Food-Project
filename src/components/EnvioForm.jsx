import React, { Component } from 'react';
import './styles/EnvioForm.css';

export class EnvioForm extends Component {
  state = {
    form: {},
    submit: false,
  };
  handleChange = e => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      submit: true
    })
    console.log('Se ha enviado el form')
    console.log(this.state)
  }
  render() {
    return (
      <div className="form">
        <p className="form__title">Datos de envío</p>

        <div className="form__container">
          <form className="form__form">
            <label className="form__label">Nombre</label>
            <input
              className="form__input"
              onChange={this.handleChange}
              name="Nombre"
              placeholder="Ingresa tu nombre..."
              type="text"
              required>
            </input>
            <label className="form__label">Direccion</label>
            <input
              className="form__input"
              onChange={this.handleChange}
              name="Direccion"
              placeholder="ej. calle numero piso/depto"
              type="text">
            </input>
            <label className="form__label">Celular</label>
            <input
              className="form__input"
              onChange={this.handleChange}
              name="Celular"
              placeholder="ej. 1522233444"
              type="number">
            </input>
            <label className="form__label">Email</label>
            <input
              className="form__input"
              onChange={this.handleChange}
              name="Email"
              placeholder="ej. abc@gmail.com"
              type="email">
            </input>
          </form>

          <div className="button__container">
            <button className="btn" onSubmit={this.handleSubmit}>Enviar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EnvioForm
