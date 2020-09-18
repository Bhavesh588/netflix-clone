import React from "react";
import './sliderItem.scss';

const SliderItem = ({ movie, width }) => {
    return (
        <div className="slider-item" style={{ width: `${width}%` }}>
            <img
                className="slider-image"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
            />
        </div>
    );
};

export default SliderItem