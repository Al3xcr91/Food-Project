import React, { Component } from 'react';
import '../styles/Menu.css';
import MenuList from '../components/MenuList';

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='menu__title'>Menu</h1>
        <div className='menu__container'>
          <MenuList name='Comida 1'/>
          <div className='menu__text'>
            <p>Lorem</p>
          </div>
          <img className='menu__img' src='' alt='Hamburguesa'></img>
        </div>
      </div>
    )
  }
}

export default Menu
