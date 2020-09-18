import React, { Component } from 'react';
import './App.scss';
// import Row from './component/Row/Row';
import Slider from './component/slider/slider.js'
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav'
import requests from './Request';
import axios from './axios';
// import ReactGa from 'react-ga';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Original: [],
      Trending:[],
      TopRated: []
    };
  }

  async componentDidMount() {
    const fetchUrl = {
      Original: requests.fetchNetflixOriginals,
      Trending: requests.fetchTrending,
      TopRated: requests.fetchTopRated
    }

    for(let key in fetchUrl) {
      await axios.get(fetchUrl[key])
      .then(res => 
        this.setState({ [key]: res.data.results })
      )
    }
  }

  // useEffect(() => {
  //   ReactGa.initialize('UA-161261812-2')
  //   ReactGa.pageview('/')
  // }, [])

  render() {
    const { Original, Trending, TopRated } = this.state
    return (
      <div className="app">
        <Nav />
        <Banner />
        <div className="app__row">
          <h2>NETFLIX ORIGINALS</h2>
          {
            Original !== []
            ? <Slider title="NETFLIX ORIGINALS" movies={Original} />
            : null
          }
          <h2>Trending Now</h2>
          {
            Trending !== []
            ? <Slider title="Trending" movies={Trending} />
            : null
          }
          <h2>Top Rated</h2>
          {
            TopRated !== []
            ? <Slider title="TopRated" movies={TopRated} />
            : null
          }
        </div>
          {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrotMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
        <div style={{
          color: "white",
          padding: "20px",
          backgroundColor: "rgba(51,51,51,0.2)"
        }}>
          <strong>Notice: </strong>Still work in progress.
          The functionality will be added every day so come and visit please.
          Open this website either on laptop or Desktop for the better view.
        </div>
      </div>
    );
  }
}

export default App;
