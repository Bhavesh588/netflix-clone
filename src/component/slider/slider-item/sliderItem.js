import React, {useState, useEffect} from "react";
import './sliderItem.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player';

const SliderItem = ({ movie, width, id }) => {
    
    // const [ volume, setvolume ] = useState(1)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    useEffect(() => {
        // setTimeout(() => {
        //     document.getElementsByClassName("player-wrapper")[0].style.display = "inherit";
        //     document.getElementsByClassName("slider-image")[0].style.display = "none";
        // }, 5000); // after 5 secs
    }, [])

    // var genre = movie.genre_id
    // var all_genre = []
    // genre.map((g,i) => {
    //     if(i === 0) {
    //         all_genre.push(
    //             g
    //         )
    //     } else if(i < 3) {
    //         all_genre.push(
    //             <p key={i} style={{"fontSize": "5px", "margin": "8px", "border": "0"}}>⚫</p>
    //         )
    //         all_genre.push(
    //             g
    //         )
    //     }
    // })
    return (
        <div id={id} className="slider-item" style={{ width: `${width}%` }}>
            <img
                className="slider-image"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
            />
            {/* {
                movie.video_id !== undefined
                ?   <div className='player-wrapper' style={{"display": "none"}}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${movie?.video_id}`}
                            className='react-player'
                            playing={false}
                            width='100%'
                            height='100%'
                            autoPlay
                            volume={volume}
                            loop
                        />
                    </div>
                : null
            } */}
            <div className="slider-item__info">
                <div className="slider__button">
                    <div className="info__left">
                        <button className="info__button play"><PlayArrowIcon className="play_btn"/></button>
                        <button className="info__button tick"><CheckOutlinedIcon className="tick_btn" /></button>
                        <button className="info__button tick"><ThumbUpAltIcon className="tick_btn" /></button>
                        <button className="info__button tick"><ThumbDownIcon className="tick_btn" /></button>
                    </div>
                    <div className="info__right">
                        <button className="info__button downarrow"><ExpandMoreIcon className="expand_btn" /></button>
                    </div>
                </div>
                <div className="match">
                    <h5 className="m">94% Match</h5>
                    <div className="age season">16+</div>
                    <h5 className="season">1 Season</h5>
                </div>
                <div className="genre">
                    <div className="all">
                        Crime <p style={{"fontSize": "5px", "margin": "8px", "border": "0"}}>⚫</p> Drama
                        {/* {all_genre} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem