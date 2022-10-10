import React, { useEffect, useState } from 'react'
import {ButtonWatch , ButtonFavorite} from './Button'

function Card(props) {

    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border hover:scale-110">
        <div className='h-full w-full hover:cursor-pointer' onClick={props.onNavigate}>
          <img src={`https://image.tmdb.org/t/p/w500/${props.image}`}  alt={props.title} /> 
          <p className='text-black py-3 text-center px-5' onClick={props.onNavigate}>{props.title}</p>
        </div>
        <div className='my-3'>
          <ButtonWatch label="Watch Now"></ButtonWatch>
        </div>
        <ButtonFavorite label={`${props.addRemove} Favorite`} onClick={props.addFavorite}></ButtonFavorite>
      </div>
    )
  
}

export default Card
