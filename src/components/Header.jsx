import React, { Component } from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className='header__container'>
        <Link className='header__logo' to='/'>
          <img src='' alt='Logo' />
        </Link>
        <div className='menu__container'>
          <ul className='menu__list'>
            <li className='item__container'>
              <Link className='list__item' to='/menu'>Menu</Link>
            </li>
            <li className='item__container'>
              <Link className='list__item' to='/envios'>Envios</Link>
            </li>
            <li className='item__container'>
              <Link className='list__item' to='/contacto'>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
