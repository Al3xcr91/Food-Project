import React, { Component } from 'react';
import './styles/MenuImg.css';
import img from './img/img1.jpg';

export class MenuImg extends Component {
  render() {
    return (
      <img className='menu__img' src={img} alt='Hamburguesa'>{this.props.imgName}</img>
    )
  }
}

export default MenuImg
