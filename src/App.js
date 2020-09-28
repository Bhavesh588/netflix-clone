import React, { Component } from 'react';
import './App.scss';
// import Row from './component/Row/Row';
import Slider from './component/slider/slider.js'
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav'
import requests from './Request';
import axios1 from './axios';
// import axios from 'axios';
// import $ from 'jquery';
// import ReactGa from 'react-ga';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Original: [],
      Trending:[],
      TopRated: [],
      ActionMovies: [],
      ComedyMovies: [],
      HorrorMovies: [],
      RomanceMovies: [],
      Documentaries: [],
      Genre: [],
      GetData: true,
      MovieName: []
    };
  }

  async componentDidMount() {
    // ReactGa.initialize('UA-161261812-2')
    // ReactGa.pageview('/')

    // axios.get('/movies')
    // .then(res => this.setState({ Original: res.data }))
    // console.log(this.state.Original)

    // await axios.get('/genres')
    // .then(res => this.setState({ Genre: res.data }))
    // console.log(this.state.Genre)

    // axios.delete('/deletegenres/126a8e11-6b43-4ae7-abe4-cf02829fbf7e')
    // .then(res => console.log(res.data))

    //-------------------------------- Movie Store ----------------------------

    const fetchUrl = {
      Original: requests.fetchNetflixOriginals,
      Trending: requests.fetchTrending,
      TopRated: requests.fetchTopRated,
      ActionMovies: requests.fetchActionMovies,
      ComedyMovies: requests.fetchComedyMovies,
      HorrorMovies: requests.fetchHorrotMovies,
      RomanceMovies: requests.fetchRomanceMovies,
      Documentaries: requests.fetchDocumentaries
    }

    for(let key in fetchUrl) {
      await axios1.get(fetchUrl[key])
      .then(res => {
        this.setState({ [key]: res.data.results })
      })
    }

    // var moviedata = []

    // this.state.Original.map(async org => {
    //   var gener_name = []
    //   org.genre_ids.map(gen => 
    //     this.state.Genre.map(gen2 => {
    //       if(Number(gen) === Number(gen2.id)) {
    //         gener_name.push(gen2.name)
    //       }
    //       return 0
    //     })
    //   )

    //   moviedata.push({
    //     movie_id: org.id,
    //     name: org.name,
    //     overview: org.overview,
    //     poster_path: org.poster_path,
    //     backdrop_path: org.backdrop_path,
    //     genre_id: gener_name,
    //     language: org.original_language,
    //     rate: String(org.vote_average)
    //   })

    //   return 0
    // })

    // moviedata.map(movie => 
    //   axios.post('/addmovies', movie)
    //   .then(res => console.log(res.data))  
    // )

    //------------------------------- End ---------------------------------


    //--------------- Store Genres for both movies and tv shows -----------------

    // var genre_movie_tv = []

    // await axios1.get('https://api.themoviedb.org/3/genre/movie/list?api_key=bc2367968e276026c14eb5ca20255ac4&language=en-US')
    // .then(res => {
    //   res.data.genres.map(gen => genre_movie_tv.push(gen))
    // })
    // await axios1.get('https://api.themoviedb.org/3/genre/tv/list?api_key=bc2367968e276026c14eb5ca20255ac4&language=en-US')
    // .then(res => {
    //   res.data.genres.map(gen => genre_movie_tv.push(gen))
    // })
    // genre_movie_tv.map((gen,i) => {
    //   var rep = 0
    //   genre_movie_tv.map(two => {
    //     if(gen.id === two.id) {
    //       if(rep === 1) {
    //         genre_movie_tv.splice(i, 1)
    //       } else {
    //         rep = rep + 1
    //       }
    //     }
    //     return 0
    //   })
    //   return 0
    // })
    // this.setState({ Genre: genre_movie_tv })
    // var Genre = this.state.Genre
    
    // Genre.map(gen => 
    //   axios.post('/addgenres', gen)
    //   .then(res => console.log(res.data))  
    // )
    
    //---------------------------- End -------------------------------------

  }
  
  // useEffect(() => {
  //   ReactGa.initialize('UA-161261812-2')
  //   ReactGa.pageview('/')
  // }, [])

  render() {
    const { Original, Trending, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } = this.state

    var alert = document.getElementsByClassName("alert")[0]

    return (
      <div className="app">
        <div className="alert">
          <span className="closebtn" onClick={() => alert.classList.add('displaynone')}>&times;</span> 
          <strong>Notice</strong> Still work in progress. Please view the Website 
          in Desktop. I have created the backend but the data is not from my Database. 
          It is from tmdb. I will be delpoying clone backend soon. And Try Hovering over the movies
        </div>
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
          <h2>Action Movies</h2>
          {
            ActionMovies !== []
            ? <Slider title="TopRated" movies={ActionMovies} />
            : null
          }
          <h2>Comedy Movies</h2>
          {
            ComedyMovies !== []
            ? <Slider title="TopRated" movies={ComedyMovies} />
            : null
          }
          <h2>Horror Movies</h2>
          {
            HorrorMovies !== []
            ? <Slider title="TopRated" movies={HorrorMovies} />
            : null
          }
          <h2>Romance Movies</h2>
          {
            RomanceMovies !== []
            ? <Slider title="TopRated" movies={RomanceMovies} />
            : null
          }
          <h2>Documentaries</h2>
          {
            Documentaries !== []
            ? <Slider title="TopRated" movies={Documentaries} />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
