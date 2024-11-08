import React from 'react'

//import css
import "./MovieTagLine.css"

const MovieTagLine = ({ movieDetails }) => {
    return (
        <p className="MovieDetails-tagline">"{movieDetails?.tagline}"</p>
    )
}

export default MovieTagLine