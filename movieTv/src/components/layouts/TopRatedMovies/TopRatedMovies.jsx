import React from 'react'
import { NavLink } from 'react-router-dom';

//import components
import MovieTvShowsSlider from '../MovieTvShowsSlider/MovieTvShowsSlider';
import Buttons from '../Buttons/Buttons';


const TopRatedMovies = () => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    return (
        <>
            <div className="contentUnder-title">
                <h1>Top Rated Movies :</h1>
                <NavLink to="/allMovies?category=toprated">
                    <Buttons
                        variant="VievAlla" >
                        <p>View All :</p>
                    </Buttons>
                </NavLink>
            </div>
            <MovieTvShowsSlider apiUrl={apiUrl} />
        </>
    )
}

export default TopRatedMovies