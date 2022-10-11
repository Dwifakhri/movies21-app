import React, { useEffect, useState } from 'react'
import "styles/index.css"

import { WithRouter } from 'utils/Navigation'
import { useTitle } from 'utils/useTitle'

import Layout from 'components/Layout'
import Card from 'components/Card'
import Loading from 'components/Loading'
import {ButtonPage} from 'components/Button'




function Favorites(props) {
  const [datas, setDatas] = useState([])
  const [skeleton] = useState([1,2,3,4,5,6,7,8,9,10])
  const [loading, setLoading] = useState(true)
  useTitle("FAVORITES")

  useEffect(() => {
    fetchData() 
  },[]) 

 function fetchData() {
    const getMovies = localStorage.getItem("favMovies")
    if (getMovies) { 
      const parsedMovies = JSON.parse(getMovies)
      setDatas(parsedMovies)
      setLoading(false)
    }
  }

 function handleRemoveFav(movie) {
  const getMovies = localStorage.getItem("favMovies")
  const parsedMovies = JSON.parse(getMovies)
  let temp = parsedMovies.filter((item)=> item.id !== movie.id)
  localStorage.setItem("favMovies",JSON.stringify(temp))
  setDatas(temp)
  }

    return (
      <Layout>
          <div className='text-black  dark:text-white font-light text-7xl text-center py-5'>
              <a>MY FAVORITES</a>
          </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2'>
          {loading ?
          skeleton.map(
            (item) => <Loading key={item} />
          )
          : datas.map((data) => (
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