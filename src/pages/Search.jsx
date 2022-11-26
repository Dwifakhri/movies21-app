import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WithRouter } from "utils/Navigation";
import Layout from "components/Layout";
import Card from "components/Card";
import axios from "axios";
import Loading from "components/Loading";
import { ButtonPage } from "components/Button";
import swal from "sweetalert";
import { setFavorites } from "utils/redux/reducers/reducers";

function Search(props) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState(0);
  const [trailer, setTrailer] = useState({});
  const [appear, setAppear] = useState(false);

  const searchMovies = async () => {
    const { searchValue } = props.params;
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`;

    axios
      .get(url)
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...movies];
        temp.push(...results);
        setMovies(temp);
        setPage(newPage);
      })
      .catch((err) => {
        alert.apply(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    searchMovies();
  }, []);

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      const existingMovies = parsedMovies.find((item) => item.id === movie.id);
      if (existingMovies) {
        let temp = parsedMovies.filter((item) => item.id !== movie.id);
        parsedMovies.pop(temp);
        swal(existingMovies.title, "Already in Favorites", "error");
      } else {
        parsedMovies.push(movie);
        swal(movie.title, "Add to Favorites", "success");
        const temp = JSON.stringify(parsedMovies);
        dispatch(setFavorites(parsedMovies));
        localStorage.setItem("favMovies", temp);
      }
    } else {
      const temp = JSON.stringify([movie]);
      dispatch(setFavorites([movie]));
      localStorage.setItem("favMovies", temp);
    }
  }

  const watchTrailer = async (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res;
        setAppear(true);
        setTrailer(data.videos?.results[0]?.key);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hideTrailer = () => {
    setAppear(false);
  };

  return (
    <Layout>
      <div className="text-black  dark:text-white font-light text-7xl text-center py-5">
        <p>SEARCHING</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2 py-5">
        {loading
          ? skeleton.map((item) => <Loading key={item} />)
          : movies.map((data) => (
              <Card
                key={data.id}
                image={data.poster_path}
                title={data.title}
                addRemove={"Add to"}
                onNavigate={() => props.navigate(`/detail/${data.id}`)}
                addFavorite={() => handleFav(data)}
                clickTrailer={() => {
                  setMovieId(data.id);
                  watchTrailer(data.id);
                }}
              />
            ))}
      </div>
      <div className="flex flex-row space-x-1">
        <iframe
          className={
            appear === false ? "hidden" : "inline z-100 fixed top-24 px-12"
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
          }
        >
          ✕
        </div>
      </div>
      <ButtonPage label="Load More" onClick={() => searchMovies()}></ButtonPage>
    </Layout>
  );
}

export default WithRouter(Search);
