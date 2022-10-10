import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { WithRouter } from 'utils/Navigation'
import axios from "axios"
import Card from 'components/Card'

let url = "https://api.themoviedb.org/3/search/movie?api_key="

 function Layout(props) {
    const [datas, setDatas] = useState([])
    const [input, setInput] = useState("")
    const [url_set, setUrl] = useState(url)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetchData()
    },[url_set])

    function fetchData() {
        axios.
        get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then((res) => {
          const { results } = res.data
          const temp = [...datas]
          temp.push(...results)
          setDatas(temp)
          
    
        })
        .catch((err) => {
          alert.apply(err.toString())
        })
        .finally(() => {
          setLoading(false)
        })
      }

    function searchMovie(evt) {
        if(evt.key=="Enter") {
            let url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${input}`
            setUrl(url)
            setInput("")
        }
    }

    return (
    <div className='w-full h-screen overflow-auto text-white font-bold'>
        <nav className='w-full h-52 md:h-32 lg:h-20 bg-gray-800 flex justify-between md:px-5 px-5 top-0 sticky z-10'>
            <div className='h-20 flex flex-col md:flex-col lg:flex-row md:space-x-5 text-xl'>
                <Link to="/">
                <a> <span className='text-4xl text-cyan-400 italic h-20 flex justify-center items-center md:px-3 px-3'>MOVIES21</span></a>
                </Link>
                <div className='flex flex-col md:flex-row'>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <Link to="/"><a href="#">NOW PLAYING</a>
                        </Link>
                    </li>
                    <li className='hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <Link to="/favorites"><a>FAVORITES</a>
                        </Link>
                    </li>
                    <li className='hover:cursor-not-allowed h-10 md:h-12 lg:h-20 flex justify-center items-center md:items-start lg:items-center px-3'>
                        <a>18+</a>
                    </li>
                </div>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center pt-16 space-y-5 md:pt-8 md:space-y-2 lg:pt-0 lg:space-y-0 md:space-x-5 text-xl'>
                <form action="">
                    <div>
                     <input 
                     type="text" 
                     name='seacrh' 
                     placeholder='Search Film...'                    
                     className='px-5 font-normal text-gray-600 h-10 w-36 md:w-72 lg:w-96 rounded-lg' 
                     onChange={(event) => {setInput(event.target.value)}}
                     value={input} 
                     onKeyPress={searchMovie}
                    
                     />
                     </div>
                </form>
                <button onClick={() => props.navigate(`/search/movie_name`)} className='bg-sky-900 py-2 px-3 items-center'>SEARCH</button>
            </div>
        </nav>
        {props.children}
       
    </div>
    )
  
}

export default WithRouter(Layout)
