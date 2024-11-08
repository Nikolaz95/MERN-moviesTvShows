import React from 'react'


//import css
import "./RunTime.css";

const RunTime = ({ movieDetails }) => {
    return (
        <div className='MovieDetails-timeDetails'>
            <div className="MovieDetails-runTime">
                <p>Runtime:</p>
                <span>{movieDetails?.runtime} min</span>
            </div>
        </div>
    )
}

export default RunTime