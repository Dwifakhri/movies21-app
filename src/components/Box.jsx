import React, { Component } from 'react'

import {ButtonWatch , ButtonFavorite} from './Button'

class Box extends Component {
  render() {
    return (
      <div className='flex flex-col md:flex-col lg:flex-row lg:justify-evenly'>
        <div className='bg-local flex flex-row'>
            <img className='opacity-30 w-96 object-cover absolute' src={this.props.image} alt={this.props.title} />
            <img className='px-12 py-12 justify-center' src={this.props.image} alt={this.props.title} />
        </div>
        <div className='text-black'>
            <a className='text-7xl'>{this.props.title}</a>
            <ul className='py-5 text-xl leading-10 flex flex-row'>
                <div>
                <li>Country </li>
                <li>Genre</li>
                <li>Duration</li>
                <li>Director</li>
                </div>
                <div className='font-normal text-left'>
                <div>{this.props.country}</div>
                <div>{this.props.genre}</div>
                <div>{this.props.duration}</div>
                <div>{this.props.director}</div>
                </div>
            </ul>
            <h2 className='text-2xl'>Synopsis</h2>
            <p className='w-96 font-normal'>{this.props.synopsis}</p>
            <div className='flex flex-col py-5 md:flex-col lg-flex-row'>
              <ButtonWatch label={this.props.click}></ButtonWatch>
              <ButtonFavorite label={this.props.favorite}></ButtonFavorite>
            </div>
        </div>
      </div>
    )
  }
}

export default Box