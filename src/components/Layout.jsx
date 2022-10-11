import React, { useContext} from 'react'
import { Link } from 'react-router-dom'


import {ThemeContext} from 'utils/context'


const Layout = ({children}) => {
    const {isLight, setIsLight} =useContext(ThemeContext)
   
    return (
    <div className='relative w-full h-screen overflow-auto text-white font-bold dark:bg-black'>
        <nav className='w-full h-52 md:h-32 lg:h-20 bg-gray-800 flex justify-between md:px-5 px-5 top-0 sticky z-10'>
            <div className='h-20 flex flex-col md:flex-col lg:flex-row md:space-x-5 text-xl'>
                <Link to="/">
                <a> <span className='text-4xl text-cyan-400 italic h-20 flex justify-center items-center md:px-3 px-3'>MOVIES21</span></a>
                </Link>
                <div className='flex flex-col md:flex-row'>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <Link to="/"><a href="#">NOW PLAYING</a>
                        </Link>
                    </li>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <Link to="/favorites"><a>FAVORITES</a>
                        </Link>
                    </li>
                    <li className='hover:cursor-not-allowed h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <a>18+</a>
                    </li>
                </div>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center pt-16 space-y-5 md:pt-8 md:space-y-2 lg:pt-0 lg:space-y-0 md:space-x-5 text-xl'>
                <button className='text-black w-10 h-10 bg-slate-400 dark:bg-white rounded-full flex justify-center items-center' 
                // label={isLight? "Light Mode" : "Dark Mode"} 
                onClick={()=>setIsLight(!isLight)}
                >
                    <span>
                        {isLight !== "dark" ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg> )}
                    </span>
                </button>
                <form action="">
                    <div>
                     <input 
                     type="text" 
                     name='seacrh' 
                     placeholder='Search Film...'                    
                     className='px-5 font-normal text-gray-600 dark:text-white h-10 w-36 dark:bg-black md:w-72 lg:w-96 rounded-lg' 
                     />
                     </div>
                </form>
                </div>
        </nav>
        {children}
       
    </div>
    )
  
}

export default Layout
