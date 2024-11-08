import React from 'react'
import useFetch from '../../../../hooks/useFetch';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import "./ActorsSection.css";

//import components


//import images
import Missing from "../../../../assets/pictures/mising-pic.jpg"


const ActorsSection = ({ params }) => {
    const ActorSlider = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiMoviemovieActors = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}`;

    // Fetch data
    const { data, loading, error } = useFetch(apiMoviemovieActors);

    // Check if data or results are available
    const movieActors = data || {}; // Safely access the 'results' array
    return (
        <section className='section-Actors'>
            <h1 className='title-actors'>Actors:</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                breakpoints={ActorSlider}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-Actors'>

                <div className="actors-content">
                    {movieActors?.cast?.map(actor => (
                        <SwiperSlide key={actor.id} className="actors-card">

                            <NavLink to={`/actor/${actor.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt="n" className="actors-img" title={actor.name} />
                            </NavLink>
                            <div className="actors-botton-container">
                                <p className="actors-name">{actor.name}</p>
                                <p className="actors-name">As</p>
                                <p className="actors-character">{actor.character}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default ActorsSection