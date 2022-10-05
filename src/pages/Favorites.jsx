import React, { Component } from 'react'
import "../styles/index.css"

import Layout from '../components/Layout'
import Card from '../components/Card'
import Loading from '../components/Loading'


class Favorites extends Component {

  state = {
    title : "Welcome",
    datas : [],
    skeleton : [1,2,3,4,5,6,7,8,9,10],
    loading : true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.setState( {loading: true })
    let dataTemp = []
    for (let i = 0; i < 10; i ++) {
      const temp = {
        id : i + 1,
        title : `FILM # ${i + 1}`,
        click : "Watch Now",
        favorite : "Favorites",
        image : "https://upload.wikimedia.org/wikipedia/id/4/40/Batmanlee.png",
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
          <div className='text-black font-light text-7xl text-center py-5'>
              <a>MY FAVORITES</a>
          </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-4 my-2'>
          {this.state.loading ?
          this.state.skeleton.map(
            (item) => <Loading key={item} />
          )
          : this.state.datas.map((data) => (
            <Card 
            key={data.id}
            image={data.image}
            title={data.title}
            click={data.click}
            favorite={`Remove from ${data.favorite}`}
            />
          ))}
          </div>
      </Layout>
    )
  }
}

export default Favorites