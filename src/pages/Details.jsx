import React, { useState, useEffect } from "react"
import "styles/index.css"
import axios from "axios"
import { useDispatch } from "react-redux"
import swal from "sweetalert"
import { WithRouter } from "utils/Navigation"
import { useTitle } from "utils/useTitle"
import { setFavorites } from "utils/redux/reducers/reducers"
import Layout from "components/Layout"
import Box from "components/Box"
import Loading from "components/Loading"

function Details(props) {
  const [data, setData] = useState({})
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useTitle(data.title)

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    const { id_movie } = props.params
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res
        setData(data)
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies")
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies)
      const existingMovies = parsedMovies.find((item) => item.id === movie.id)
      if (existingMovies) {
        let temp = parsedMovies.filter((item) => item.id !== movie.id)
        parsedMovies.pop(temp)
        swal(existingMovies.title, "Already in Favorites", "error")
      } else {
        parsedMovies.push(movie)
        swal(movie.title, "Add to Favorites", "success")
        const temp = JSON.stringify(parsedMovies)
        dispatch(setFavorites(parsedMovies))
        localStorage.setItem("favMovies", temp)
      }
    } else {
      const temp = JSON.stringify([movie])
      dispatch(setFavorites([movie]))
      localStorage.setItem("favMovies", temp)
    }
  }

  return (
    <Layout>
      <Box
        key={data.id}
        image={data.poster_path}
        backdrop={data.backdrop_path}
        title={data.title}
        date={data.release_date}
        language={data.original_language}
        vote={data.vote_average}
        overview={data.overview}
        addFavorite={() => handleFav(data)}
        addremove={"Add to"}
        href="#frame"
      />
      <iframe
        id="frame"
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${data.videos?.results[0]?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Layout>
  )
}

export default WithRouter(Details)
