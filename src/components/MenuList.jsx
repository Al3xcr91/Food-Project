import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './styles/MenuList.css';

export class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }
    console.log(this.state)
    console.log(this.props)
  }
  handleClick = e => {
    this.setState({
      pressed: true
    })
    console.log(e)
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    return (
      <ul className='menu__list'>
        <li className='menu__item' onClick={this.handleClick}>
          <p className='item__title'>{this.props.name}</p>
        </li>
      </ul>
    )
  }
}

export default MenuItem
