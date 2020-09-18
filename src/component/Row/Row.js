import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Swiper, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min';
import './style.css'
import $ from 'jquery';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

Swiper.use(Navigation)

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         new Swiper('.swiper-container', {
    //             slidesPerView: 2,
    //             spaceBetween: 4,
    //             slidesPerGroup: 2,
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //         });
    //     } else {
    //         new Swiper('.swiper-container', {
    //             slidesPerView: 6,
    //             spaceBetween: 4,
    //             slidesPerGroup: 1,
    //             navigation: {
    //                 nextEl: '.swiper-button-next',
    //                 prevEl: '.swiper-button-prev',
    //             },
    //         });
    //     }
    // }
      
    // var x = window.matchMedia("(max-width: 700px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes
    
    // new Swiper('.swiper-container', {
    //     slidesPerView: 6,
    //     spaceBetween: 4,
    //     slidesPerGroup: 2,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* <div className="row__posters">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            movies.map((movie, i) => (
                                <div className="swiper-slide" key={i}>
                                    <img 
                                        onClick={() => handleClick(movie)}
                                        // className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                        className="row__poster" 
                                        src={`${base_url}${isLargeRow ? movie.backdrop_path : movie.backdrop_path}`} 
                                        alt={movie.name} key={i} 
                                    />
                                </div>
                            ))
                        }

                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div> */}


            {/* container -> posters */}
            <div className="netflix">
                <div className="row__posters">
                    {
                        movies.map((movie, i) => 
                            <div className="row__poster">
                                <img 
                                    onClick={() => handleClick(movie)}
                                    // className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                    // className="row__poster" 
                                    src={`${base_url}${isLargeRow ? movie.backdrop_path : movie.backdrop_path}`} 
                                    alt={movie.name} key={i} 
                                />
                            </div>
                        )
                    }
                </div>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
