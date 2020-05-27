import React, { Component } from 'react';
import './styles/MenuText.css';

export class MenuText extends Component {
  render() {
    return (
      <div className='menu__text'>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default MenuText
