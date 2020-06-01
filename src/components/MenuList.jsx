import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './styles/MenuList.css';
// import MenuItem from './MenuItem';

export class MenuList extends Component {
  render() {
    return (
      <ul className='menu__list'>
        <li className='menu__item'>
          <p className='menu__p' id='1' onClick={this.props.onClick}>{this.props.data.menu1.name}</p>
        </li>
        <li className='menu__item' >
          <p className='menu__p' id='2' onClick={this.props.onClick}>{this.props.data.menu2.name}</p>
        </li>
        <li className='menu__item' >
          <p className='menu__p' id='3' onClick={this.props.onClick}>{this.props.data.menu3.name}</p>
        </li>
        <li className='menu__item'>
          <p className='menu__p' id='4' onClick={this.props.onClick}>{this.props.data.menu4.name}</p>
        </li>
      </ul>
    )
  }
}

export default MenuList
