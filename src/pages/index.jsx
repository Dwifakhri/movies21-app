import { useState, useEffect } from 'react'
import "styles/index.css"
import axios from "axios"
import swal from 'sweetalert'

import { WithRouter} from 'utils/Navigation'
import { useTitle } from 'utils/useTitle'

import Layout from 'components/Layout'
import Card from 'components/Card'
import Loading from 'components/Loading'
import {ButtonPage} from 'components/Button'


function App (props) {

const [title] = useState("Welcome")
const [datas, setDatas] = useState([])
const [skeleton] = useState([1,2,3,4,5,6,7,8,9,10])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)

useTitle("MOVIES21")

useEffect(() => {
  fetchData()
}, [])

function fetchData() {
    axios.
    get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      const { results } = res.data
      const newPage = page + 1
      const temp = [...datas]
      temp.push(...results)
      setDatas(temp)
      setPage(newPage)

    })
    .catch((err) => {
      alert.apply(err.toString())
    })
    .finally(() => {
      setLoading(false)
    })
  }

function handleFav(movie){
  const getMovies = localStorage.getItem("favMovies")
  if (getMovies) {
    const parsedMovies = JSON.parse(getMovies)
    const existingMovies = parsedMovies.find(item => item.id === movie.id)
    if (existingMovies) {
      let temp = parsedMovies.filter(item => item.id !== movie.id) 
      parsedMovies.pop(temp)
      swal((existingMovies.title), "Already in Favorites", "error")
    } else {
      parsedMovies.push(movie)
    const temp = JSON.stringify(parsedMovies)
    localStorage.setItem("favMovies", temp)

    }
  } else {
  const temp = JSON.stringify([movie])
  localStorage.setItem("favMovies", temp)
  }
}

    return (
      <Layout>
          <div className='text-black dark:text-white font-light text-7xl text-center py-5'>
              <p>NOW PLAYING</p>
          </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2 py-5'>
          {loading ?
          skeleton.map(
            (item) => <Loading key={item} />
          )
          : datas.map((data) => (
            <Card 
            key={data.id}
            image={data.poster_path}
            title={data.title}
            addRemove={"Add to"}
            onNavigate={() => props.navigate(`/detail/${data.id}`)}
            addFavorite={() => handleFav(data)}
            />
          ))}
          </div>
          <ButtonPage label="Load More" onClick={() => fetchData()}></ButtonPage>
      </Layout>
    )
  }


export default WithRouter(App)