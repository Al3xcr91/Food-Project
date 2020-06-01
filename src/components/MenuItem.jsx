import React, { Component } from 'react';
import './styles/MenuItem.css';

export class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <li className='menu__item' onClick={this.props.onClick}>
        <p className='item__title'>{this.props.name}</p>
      </li>
    )
  }
}

export default MenuItem;