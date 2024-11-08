import React from 'react'

//import css
import "./MovieOverview.css"

const MovieOverview = ({ movieDetails }) => {
    return (
        <p className="MovieDetails-overWiev">{movieDetails?.overview}</p>
    )
}

export default MovieOverview