import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFavorites } from "utils/redux/reducers/reducers";

import Home from "pages";
import Details from "pages/Details";
import Favorites from "pages/Favorites";
import Search from "pages/Search";

import { ThemeContext } from "utils/context";
import { light } from "@mui/material/styles/createPalette";

function App() {
  const dispatch = useDispatch();
  const [isLight, setIsLight] = useState(localStorage.getItem("theme") === 'light');
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {        
    if (!isLight) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(setFavorites(JSON.parse(getMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:searchValue" element={<Search />} />
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
