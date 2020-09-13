import React, { useEffect } from 'react';
import './App.css';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav'
import requests from './Request';
import ReactGa from 'react-ga';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-161261812-2')
    ReactGa.pageview('/')
  }, [])

  return (
    <div className="app">
      <Nav />
      <Banner />
      <div style={{
        color: "white",
        padding: "20px",
        backgroundColor: "rgba(51,51,51,0.2)"
      }}>
        <strong>Notice: </strong>Still work in progress.
        The functionality will be added every day so come and visit please.
        Open this website either on laptop or Desktop for the better view.
      </div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrotMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
