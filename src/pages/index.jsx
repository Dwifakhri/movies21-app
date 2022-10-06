import React, { Component } from 'react'
import "../styles/index.css"
import axios from "axios"

import Layout from '../components/Layout'
import Card from '../components/Card'
import Loading from '../components/Loading'
import {ButtonPage} from '../components/Button'

class Home extends Component {

  state = {
    title : "Welcome",
    datas : [],
    skeleton : [1,2,3,4,5,6,7,8,9,10],
    loading : true,
    page : 1,
    click : "Watch Now",
    favorite : "Favorites"
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.setState({ loading : true })
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
    .then((res) => {
      const { results } = res.data
      const newPage = this.state.page + 1
      const temp = [...this.state.datas]
      temp.push(...results)
      this.setState({datas : temp, page : newPage})
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      this.setState({loading : false})
    })
  }

  render() {
    return (
      <Layout>
          <div className='text-black font-light text-7xl text-center py-5'>
              <p>NOW PLAYING</p>
          </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2'>
          {this.state.loading ?
          this.state.skeleton.map(
            (item) => <Loading key={item} />
          )
          : this.state.datas.map((data) => (
            <Card 
            key={data.id}
            image={data.poster_path}
            title={data.title}
            click={"Watch Now"}
            favorite={`Add to Favorite`}
            />
          ))}
          </div>
          <ButtonPage label="Load More" onClick={() => this.fetchData()}></ButtonPage>
      </Layout>
    )
  }
}

export default Home