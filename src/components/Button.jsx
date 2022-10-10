import React, { useState, useEffect } from 'react'

function ButtonWatch (props)  {
    return (
      <button className='h-10 w-full text-white bg-sky-900 rounded-lg py-2'>{props.label}</button>
    )
  
}

function ButtonFavorite(props)  {
    return (
        <button className='h-10 w-full text-white bg-rose-600 rounded-lg py-2' onClick={props.onClick}>{props.label}</button>
    )
  
}


function ButtonPage(props) {
    return (
      <button className='bg-white text-xl text-black w-full h-12 border border-l rounded-lg shadow-lg items-center px-5' onClick={props.onClick}>{props.label}</button>
    )
  
}

export {ButtonFavorite, ButtonPage, ButtonWatch}