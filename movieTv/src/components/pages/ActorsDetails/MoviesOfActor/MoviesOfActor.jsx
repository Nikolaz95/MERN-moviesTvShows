import React from 'react'


//import css
import "./MoviesOfActor.css";

import Buttons from '../../../layouts/Buttons/Buttons';
import MovieTvShowsSlider from '../../../layouts/MovieTvShowsSlider/MovieTvShowsSlider';


const MoviesOfActor = ({ params, actorsDetails }) => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrl = `https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=${apiKey}`;
    console.log(apiUrl);


    return (
        <>
            <main className='actorDetailsMovies-main'>
                <h1 className='actorDetailsMovies-title'>
                    Movies of {actorsDetails?.name} : {apiUrl.length}
                </h1>

                <MovieTvShowsSlider apiUrl={apiUrl} />
            </main>


        </>
    )
}

export default MoviesOfActor