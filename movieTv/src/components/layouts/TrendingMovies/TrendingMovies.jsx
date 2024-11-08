import React from 'react'
import { NavLink } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

//swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import css
import "./TrendingMovies.css";

//import components
import Rating from '../RatingComponent/Rating';

const TrendingMovies = () => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiMovieTrendingWeek = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    // Fetch data
    const { data, loading, error } = useFetch(apiMovieTrendingWeek);

    // Check if data or results are available
    const trendingMovies = data?.results || []; // Safely access the 'results' array

    return (
        <>
            <section className='HomePg-section'>
                <div className='HomePg-topContent'>
                    <Swiper spaceBetween={30} effect={'fade'} navigation={false}
                        /* autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} */
                        loop={true}
                        /* onAutoplayTimeLeft={onAutoplayTimeLeft} */
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}>

                        {trendingMovies.map((movie) => (

                            <SwiperSlide key={movie.id}>
                                {/* background video  */}
                                <div className="HomePg-BgPoster">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='HomePg-BgPosterImg' />
                                </div>
                                {/* background video  */}


                                <div className="HomePg-PosterContent">
                                    {/* poster img */}
                                    <div className="HomePg-left">
                                        <NavLink to={`/movies/${movie.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title}
                                                className='HomePg-posterCard'
                                                title={movie.title} />
                                        </NavLink>
                                    </div>
                                    {/* poster img */}
                                    <div className="HomePg-right">
                                        <div className="HomePg-rightTop">
                                            <h1 className="HomePg-rightTitle">{movie.title}</h1>
                                        </div>
                                        <div className="HomePg-rightMiddle">
                                            <p className="HomePg-overWiev">
                                                {movie.overview}
                                            </p>
                                        </div>
                                        <div className="HomePg-rightBottom">
                                            <span className='HomePg-releaseDate'>
                                                <p>{movie.release_date}  </p>
                                            </span>
                                            <Rating movie={movie} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* swiper auto play progress*/}
                        {/* <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div> */}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default TrendingMovies