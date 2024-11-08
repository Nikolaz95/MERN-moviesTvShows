import React from 'react'
import titleName from '../../../hooks/useTitle';
import TrendingMovies from '../../layouts/TrendingMovies/TrendingMovies';
import TheaterMovies from '../../layouts/TheaterMovie/TheaterMovies';
import TopRatedMovies from '../../layouts/TopRatedMovies/TopRatedMovies';
import UpcomingMovies from '../../layouts/UpcomingMovies/UpcomingMovies';
import TopRatedTvShows from '../../layouts/TopRatedTvShows/TopRatedTvShows';
import TopPopularTvShows from '../../layouts/TopPopularTvShows/TopPopularTvShows';


const HomePage = () => {
    titleName('Movies and Tv Shows');
    return (
        <div className='HomePage-content'>
            <TrendingMovies />

            <TheaterMovies />

            <UpcomingMovies />

            <TopRatedMovies />

            {/* <TopPopularTvShows /> */}

            {/* <TopRatedTvShows /> */}
        </div>

    )
}

export default HomePage
