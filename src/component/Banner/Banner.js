import React, { useEffect, useState } from 'react'
import './Banner.scss';
import axios1 from '../../axios';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import requests from '../../Request';

function Banner() {
    const [ movie, setMovie] = useState([]);
    const [ volume, setvolume ] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const request = await axios1.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData()
        // setTimeout(() => {
        //     document.getElementsByClassName("player-wrapper")[0].style.display = "inherit";
        //     document.getElementsByClassName("banner__image")[0].style.display = "none";
        // }, 5000); // after 5 secs
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    function volumeset() {
        if(volume === 0) {
            setvolume(1)
        } else {
            setvolume(0)
        }
    }

    return (
        <header className="banner">
            <div className="banner__postion">
                <img className="banner__image" style={{"display": "inherit"}} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="banner" />
                {/* {
                    movie.video_id !== undefined
                    ?   <div className='player-wrapper' style={{"display": "none"}}>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${movie?.video_id}`}
                                className='react-player'
                                playing
                                width='100%'
                                height='100%'
                                autoPlay
                                volume={volume}
                                loop
                            />
                        </div>
                    : null
                } */}
                <div className="banner__fadeButton"></div>
            </div>
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">{ movie?.title || movie?.name || movie?.original_name }</h1>
                {/* buttons */}
                <div className="banner__arrange">
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <button className="banner__button_mute" onClick={volumeset}>{volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}</button>
                </div>
                {/* Description */}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__spacing">
            </div>
        </header>
    )
}

export default Banner
