import React, { useState, useEffect } from 'react'

function ButtonWatch (props)  {
    return (
      <button className='h-10 w-full text-white  dark:text-sky-600 bg-sky-900  dark:bg-slate-900 rounded-lg py-2'>{props.label}</button>
    )
  
}

function ButtonFavorite(props)  {
    return (
        <button className='h-10 w-full dark:bg-slate-900 text-white dark:text-rose-600 bg-rose-600 rounded-lg py-2' onClick={props.onClick}>{props.label}</button>
    )
  
}


function ButtonPage(props) {
    return (
      <button className='bg-white dark:bg-black text-xl text-black dark:text-white w-full h-12 border border-l dark:border-blue-900 rounded-lg shadow-lg items-center px-5' onClick={props.onClick}>{props.label}</button>
    )
  
}

export {ButtonFavorite, ButtonPage, ButtonWatch}