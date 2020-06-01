import React, { Component } from 'react';
import './styles/Menu.css';
import MenuList from '../components/MenuList';
import MenuText from '../components/MenuText';
import MenuImg from '../components/MenuImg';
import data from '../utils/data2.json';

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      data1: {},
      pressed: data.menu1
    }
  }
  handleClick = (e) => {
    this.setState({
      pressed: `menu${e.target.id}`,
      data1: this.state.data[`menu${e.target.id}`]
    })
  }
  render() {
    console.log(this.state.data1)
    var img = this.state.data1.img || 'img1'
    return (
      <div className='menu'>
        <h1 className='menu__title'>Fire #7 Burgers</h1>

        <div className='menu__container'>

          <MenuList data={this.state.data} onClick={this.handleClick} />

          <div className='menu__text'>
            <p>{this.state.data1.text || this.state.data.menu1.text}</p>
          </div>

          <div className='img__container'>
            <img src={require(`../components/img/${img}.jpg`)} alt={this.state.data1.img}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
