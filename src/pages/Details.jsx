import React, { Component } from 'react'
import "../styles/index.css"

import Layout from '../components/Layout'
import Box from '../components/Box'


export class Details extends Component {

  state = {
    title : "Welcome",
    datas : [],
    skeleton : [1],
    loading : true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.setState( {loading: true })
    let dataTemp = []
    for (let i = 0; i < 1; i ++) {
      const temp = {
        id : i + 1,
        title : `FILM # ${i + 1}`,
        click : "Watch Now",
        favorite : "Favorites",
        image : "https://upload.wikimedia.org/wikipedia/id/4/40/Batmanlee.png",
        country : "America",
        genre : "Action",
        duration : "150 Minutes",
        director : "Willy Wonka",
        synopsis : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugiat? Voluptates soluta illum aspernatur cum? Voluptas minima at illo esse beatae fugit hic accusantium. Totam nam asperiores dolor, facere adipisci animi quo sapiente harum nobis eos similique explicabo soluta sequi doloremque eum! Nostrum eos nam voluptatem asperiores voluptas dolor unde",

      }
      dataTemp.push(temp)
    }
    setTimeout(() => {
      this.setState({
        loading : false,
        datas : dataTemp,
        title : "Welcome",
      })
    }, 2000);
  }

  render() {
    return (
      <Layout>
        <div className='px-5 py-5'>
        {this.state.datas.map((data) => (
            <Box 
            key={data.id}
            image={data.image}
            title={data.title}
            click={data.click}
            favorite={`Add to ${data.favorite}`}
            duration={data.duration}
            genre={data.genre}
            director={data.director}
            country={data.country}
            synopsis={data.synopsis}
            ></Box>
        ))}
        </div>
      </Layout>
    )
  }
}

export default Details