import React, { Component } from 'react';
import '../styles/Menu.css';
import MenuList from '../components/MenuList';
import MenuText from '../components/MenuText';
import MenuImg from '../components/MenuImg';

export class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='menu__title'>Menu</h1>
        <div className='menu__container'>
          <MenuList name='Comida 1'/>
          <MenuText text={this.props.text}/>
          <MenuImg name={this.props.name}/>
        </div>
      </div>
    )
  }
}

export default Menu
