import React from 'react';

const Movie = (props) => {
    const movie = props.movie;
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" height="300px" width="200px" />
            <h2>{movie.title} ({movie.release_date})</h2>
            <h5>{movie.overview}</h5>
        </div>
    )
}

export default Movie;