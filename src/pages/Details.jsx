import React, { useState, useEffect } from 'react'
import "styles/index.css"
import axios from 'axios'

import { WithRouter } from 'utils/Navigation'
import { useTitle } from 'utils/useTitle'

import Layout from 'components/Layout'
import Box from 'components/Box'
import Loading from 'components/Loading'


function Details(props) {
  const [data, setData] = useState({})
  const [loading, setLoading] =useState(true)

  useTitle(data.title)

useEffect(() => {
  fetchData()
}, []) 

 function fetchData() {
    const { id_movie } = props.params
    axios
    .get(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    
    .then((res) => {
      const { data } = res
      setData(data)

    })
    .catch((err) => {
      alert(err.tooString())
    })
    .finally(() => {
      setLoading(false)
    })
  }

    return (
      <Layout>
         <div className='px-2'>
            <Box 
            key={data.id}
            image={data.poster_path}
            backdrop={data.backdrop_path}
            title={data.title}
            date={data.release_date}
            language={data.original_language}
            vote={data.vote_average}
            overview={data.overview}
            addremove={"Add to"}
            />
        </div>
      </Layout>
    )
  
}

export default WithRouter(Details)