import React, { Component } from 'react'

 class Layout extends Component {
  render() {
    return (
    <div className='w-full h-screen overflow-auto text-white font-bold'>
        <nav className='w-full h-52 md:h-32 lg:h-20 bg-gray-800 flex justify-between md:px-5 px-5 top-0 sticky'>
            <div className='h-20 flex flex-col md:flex-col lg:flex-row md:space-x-5 text-xl'>
                <a href="#"> <span className='text-3xl text-cyan-400 italic h-20 flex justify-center items-center md:px-3 px-3'>MOVIES21</span></a>
                <div className='flex flex-col md:flex-row'>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <a href="#">NOW PLAYING</a>
                    </li>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <a href="#">FAVORITES</a>
                    </li>
                    <li className='hover:cursor-not-allowed h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <a>18+</a>
                    </li>
                </div>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center pt-16 space-y-5 md:pt-8 md:space-y-2 lg:pt-0 lg:space-y-0 md:space-x-5 text-xl'>
                <form action="">
                    <div>
                     <input type="text" name='seacrh' placeholder='Search Film' autoComplete='off' aria-label='Search Film' className='px-5 font-normal text-gray-600 h-10 w-52 md:w-72 lg:w-96 rounded-lg'/>
                     </div>
                </form>
                <button className='bg-sky-900 py-2 px-3 items-center'>SEARCH</button>
            </div>
        </nav>
        {this.props.children}
    </div>
    )
  }
}

export default Layout
