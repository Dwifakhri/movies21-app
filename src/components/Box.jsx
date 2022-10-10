import React, { useState,useEffect } from 'react'

import {ButtonWatch , ButtonFavorite} from './Button'

function Box (props) {
    return (
      <div className='-z-10 absolute w-full h-screen left-0 right-0'> 
      <img className='-z-20 absolute object-contain left-0 right-0' src={`https://image.tmdb.org/t/p/original${props.backdrop}`} alt={props.title} />
      <div className='flex flex-col md:flex-row lg:flex-row lg:justify-evenly lg:px-10 py-0 px-2 mt-10'>
        <div className='flex flex-row'>
            <img className='justify-center ' src={`https://image.tmdb.org/t/p/w400${props.image}`} alt={props.title} />
        </div>
        <div className='text-black py-5 px-5 bg-white bg-opacity-60'>
            <a className='text-5xl md:text-3xl'>{props.title}</a>
            <ul className='py-5 text-xl leading-6 flex flex-row space-x-5'>
                <div>
                <li>Original Title</li>
                <li>Date</li>
                <li>Language</li>
                <li>Rating</li>
                </div>
                <div className='font-normal text-black'>
                <div>: {props.title}</div>
                <div>: {props.date}</div>
                <div>: {props.language}</div>
                <div>: {props.vote}</div>
                </div>
            </ul>
            <h2 className='text-2xl'>Synopsis</h2>
            <div className='font-normal w-80 md:w-80 pr-3'>{props.overview}</div>
            <div className='flex flex-col py-5 md:flex-col lg-flex-row w-56 space-y-5'>
              <ButtonWatch label="Watch Now"></ButtonWatch>
              <ButtonFavorite label={`${props.addremove} Favorite`}></ButtonFavorite>
            </div>
        </div>
      </div>
      </div>
    )
  
}

export default Box