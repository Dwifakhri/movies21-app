import React, { Component } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "pages"
import Details from "pages/Details"
import Favorites from "pages/Favorites"
import Search from 'pages/Search'

function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail/:id_movie' element={<Details/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/search/:title_movie' element={<Search/>}></Route>
          <Route path='*' element={<div>404 Error Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    )
  }


export default App
