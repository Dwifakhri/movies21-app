import React, { useEffect, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "pages"
import Details from "pages/Details"
import Favorites from "pages/Favorites"
import Search from 'pages/Search'

import { ThemeContext } from 'utils/context'

function App(){
  const [isLight, setIsLight] = useState(true)
  const theme = useMemo(() => ({isLight, setIsLight}), [isLight])

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark")

    } else {
      
      document.documentElement.classList.add("dark")
    }
  }, [isLight])

    return (
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail/:id_movie' element={<Details/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/search/:title_movie' element={<Search/>}></Route>
            <Route path='*' element={<div>404 Error Not Found</div>}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }


export default App
