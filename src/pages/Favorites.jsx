import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFavorites } from "utils/redux/reducers/reducers"
import "styles/index.css"
import axios from "axios"
import { WithRouter } from "utils/Navigation"
import { useTitle } from "utils/useTitle"
import Layout from "components/Layout"
import Card from "components/Card"

function Favorites(props) {
  const [movieId, setMovieId] = useState(0)
  const [loading, setLoading] = useState(true)
  const [trailer, setTrailer] = useState({})
  const [appear, setAppear] = useState(false)
  const favorites = useSelector((state) => state.data.favorites)
  const dispatch = useDispatch()
  useTitle("FAVORITES")

  function handleRemoveFav(movie) {
    const getMovies = localStorage.getItem("favMovies")
    const parsedMovies = JSON.parse(getMovies)
    let temp = parsedMovies.filter((item) => item.id !== movie.id)
    localStorage.setItem("favMovies", JSON.stringify(temp))
    dispatch(setFavorites(temp))
  }

  const watchTrailer = async (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res
        setAppear(true)
        setTrailer(data.videos?.results[0]?.key)
      })
      .catch((err) => {
        alert(err.toString())
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const hideTrailer = () => {
    setAppear(false)
  }

  return (
    <Layout>
      <div className="text-black dark:text-white font-light text-7xl text-center py-5">
        <p>MY FAVORITES</p>
      </div>
      {!favorites.length ? (
        <div className="text-xl text-black dark:text-white text-center py-5">
          No Favorites Movies
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2">
          {favorites.map((data) => (
            <Card
              key={data.id}
              image={data.poster_path}
              title={data.title}
              addRemove={"Remove from"}
              onNavigate={() => props.navigate(`/detail/${data.id}`)}
              addFavorite={() => handleRemoveFav(data)}
              clickTrailer={() => {
                setMovieId(data.id)
                watchTrailer(data.id)
              }}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row space-x-1">
        <iframe
          className={
            appear === false
              ? "hidden"
              : "inline z-100 fixed top-24 px-12 transition-all"
          }
          id="frame"
          width="100%"
          height="550"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div
          onClick={hideTrailer}
          className={
            appear === false
              ? "hidden"
              : " inline cursor-pointer z-100 fixed top-24 text-putih dark:text-red-600 p-2 bg-black"
          }>
          ✕
        </div>
      </div>
    </Layout>
  )
}

export default WithRouter(Favorites)
