import React, { useEffect, useState } from 'react'
import './Banner.scss';
import axios from '../../axios';
import requests from '../../Request';

function Banner() {
    const [ movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData()
    }, [])

    // function truncate(str, n) {
    //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // }

    return (
        <header className="banner">
            <div className="banner__postion">
                <img className="banner__image" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="banner" />
                <div className="banner__fadeButton"></div>
            </div>
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">{ movie?.title || movie?.name || movie?.original_name }</h1>
                {/* buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* Description */}
                {/* <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1> */}
            </div>
            <div className="banner__spacing">
            </div>
        </header>
    )
}

export default Banner
