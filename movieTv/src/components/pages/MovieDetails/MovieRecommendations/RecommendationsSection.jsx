import React from 'react'
//import components
import MovieTvShowsSlider from '../../../layouts/MovieTvShowsSlider/MovieTvShowsSlider';

const RecommendationsSection = ({ params }) => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrl = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${apiKey}`;

    return (
        <section className="section-recommendations">
            <h1 className="title-recommendations">Recommendations:</h1>
            <MovieTvShowsSlider apiUrl={apiUrl} />
        </section>
    )
}

export default RecommendationsSection