import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { NavLink } from 'react-router-dom';


//import css
import "./MovieTvShowsSlider.css";

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';


//import images
import DefaultAdd from "../../../assets/icons/icon-add.png"
import AddWatchList from "../../../assets/icons/icon-check.png"
import DefaultFav from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../assets/icons/icon-like.png"

//import components
import Rating from '../RatingComponent/Rating';
import Buttons from '../Buttons/Buttons';

const MovieTvShowsSlider = ({ apiUrl }) => {
    const { data, loading, error } = useFetch(apiUrl);
    const movies = data?.results || data?.cast || [];
    const sliderSettings = {
        320: { slidesPerView: 1, spaceBetween: 10 },
        660: { slidesPerView: 2, spaceBetween: 10 },
        960: { slidesPerView: 3, spaceBetween: 10 },
        1260: { slidesPerView: 4, spaceBetween: 10 },
        1600: { slidesPerView: 5, spaceBetween: 10 },
    };

    const [watchList, setWatchList] = useState({});
    const [favorites, setFavorites] = useState({});

    const handleWatchList = (movieId) => {
        setWatchList((prevWatchList) => ({
            ...prevWatchList,
            [movieId]: !prevWatchList[movieId],
        }));
    };

    const handleFavoritList = (movieId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [movieId]: !prevFavorites[movieId],
        }));
    };

    return (
        <main className='Hp-NowTheatherSlider'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={sliderSettings}
                className='swiper-homeContent'
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="conteiner-card">
                            <div className='kartica'>
                                <div className="topcard">
                                    <NavLink to={`/movies/${movie.id}`}>
                                        <img
                                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                            alt={movie.title}
                                            className='poster'
                                            title={movie.title}
                                        />
                                    </NavLink>
                                </div>
                                <div className="botom-card">
                                    <h3 className="card-title">{movie.title || movie.original_name}</h3>
                                    <p className="card-rating">
                                        <Rating movie={movie} />
                                    </p>
                                    <div className="btns-Content">
                                        <Buttons onClick={() => handleWatchList(movie.id)}
                                            variant={watchList[movie.id] ? 'removeWatchList' : 'addWatchList'}
                                        >
                                            <p>{watchList[movie.id] ? 'on WatchList' : 'Add to WatchList'}</p>
                                            <img src={watchList[movie.id] ? AddWatchList : DefaultAdd}
                                                alt="Watchlist Icon"
                                                className="iconBtns"
                                            />
                                        </Buttons>

                                        <Buttons onClick={() => handleFavoritList(movie.id)}
                                            variant={favorites[movie.id] ? 'removeFavList' : 'addFavList'}
                                        >
                                            <p>{favorites[movie.id] ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                            <img src={favorites[movie.id] ? AddFavoritList : DefaultFav}
                                                alt="Favorite Icon"
                                                className="iconBtns"
                                            />
                                        </Buttons>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    )
}

export default MovieTvShowsSlider