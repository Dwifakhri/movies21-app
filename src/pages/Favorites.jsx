import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { setFavorites } from 'utils/redux/reducers/reducers'
import "styles/index.css"

import { WithRouter } from 'utils/Navigation'
import { useTitle } from 'utils/useTitle'

import Layout from 'components/Layout'
import Card from 'components/Card'





function Favorites(props) {
  const favorites = useSelector((state)=> state.data.favorites)
  const dispatch = useDispatch()
  useTitle("FAVORITES")

 function handleRemoveFav(movie) {
  const getMovies = localStorage.getItem("favMovies")
  const parsedMovies = JSON.parse(getMovies)
  let temp = parsedMovies.filter((item)=> item.id !== movie.id)
  localStorage.setItem("favMovies",JSON.stringify(temp))
  dispatch(setFavorites(temp))
  }

    return (
      <Layout>
          <div className='text-black  dark:text-white font-light text-7xl text-center py-5'>
              <a>MY FAVORITES</a>
          </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2'>
          {favorites.map((data) => (
            <Card 
            key={data.id}
            image={data.poster_path}
            title={data.title}
            addRemove={"Remove from"}
            onNavigate={() => props.navigate(`/detail/${data.id}`)}
            addFavorite={() => handleRemoveFav(data)}
            />
          ))}
          </div>
      </Layout>
    )
  
}

export default WithRouter(Favorites)