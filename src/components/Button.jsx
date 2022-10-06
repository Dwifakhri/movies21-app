import React, { Component } from 'react'

class ButtonWatch extends Component {
  render() {
    return (
      <button className='h-10 w-full text-white bg-sky-900 rounded-lg'>{this.props.label}</button>
    )
  }
}

class ButtonFavorite extends Component {
  render() {
    return (
        <button className='h-10 w-full text-white bg-rose-600 rounded-lg'>{this.props.label}</button>
    )
  }
}


class ButtonPage extends Component {
  render() {
    return (
      <button className='bg-white text-black w-full h-10 rounded-lg shadow-lg items-center' onClick={this.props.onClick}>{this.props.label}</button>
    )
  }
}



export {ButtonFavorite, ButtonPage, ButtonWatch}