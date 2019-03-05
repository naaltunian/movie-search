import React from 'react';
import "./Movie.css";

const Movie = (props) => {
    const movie = props.movie;
    return(
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" height="300px" width="200px" />
            <span className=".card-info">
            <h2>{movie.title} ({movie.release_date})</h2>
            <h5>{movie.overview}</h5>
            </span>
        </div>
    )
}

export default Movie;