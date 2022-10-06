import React, { Component } from 'react'
import {ButtonWatch , ButtonFavorite} from './Button'

class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt={this.props.title} />
        <a href='#' className='text-black py-3 text-center px-5'>{this.props.title}</a>
        <div className='my-3'>
          <ButtonWatch label={this.props.click}></ButtonWatch>
        </div>
        <ButtonFavorite label={this.props.favorite}></ButtonFavorite>
        
      </div>
    )
  }
}

export default Card
