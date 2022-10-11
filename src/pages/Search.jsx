import {useEffect, useState} from 'react'
import { WithRouter } from 'utils/Navigation'
import Layout from 'components/Layout'
import Card from 'components/Card'

function Search() {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const searchMovies = async() => {
        const url = `https://api.themoviedb.org/3/${searchValue}/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`
    
        const response = await fetch(url)
        const responseJson = await response.json()
        
        if (responseJson.Search)
        setMovies(responseJson.Search)
    }
    
    useEffect(() => {
        searchMovies(searchValue)
    }, [searchValue]) 

    return (
        <Layout>
        <div className='text-black  dark:text-white font-light text-7xl text-center py-5'>
            <p>SEARCHING</p>
        </div> 
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2 py-5'>
          
        </div>
        
    </Layout>
  )
}

export default WithRouter(Search)