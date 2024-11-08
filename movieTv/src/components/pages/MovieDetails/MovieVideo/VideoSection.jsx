import React from 'react'
import useFetch from '../../../../hooks/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//import css
import "./VideoSection.css";

//import components


//import images

const VideoSection = ({ params }) => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiMovieTrails = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}`;

    // Fetch data
    const { data, loading, error } = useFetch(apiMovieTrails);

    // Check if data or results are available
    const movieTrails = data || {}; // Safely access the 'results' array

    const TrailsOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 1, spaceBetween: 10, },
        960: { slidesPerView: 2, spaceBetween: 10, },
        1260: { slidesPerView: 2, spaceBetween: 10, },
        1600: { slidesPerView: 3, spaceBetween: 10, },
    };
    return (
        <section className='section-videosOfMovie'>
            <h1 className='title-videosOfMovie'>Trails:</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                breakpoints={TrailsOfMovie}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-TrailsMovie'>

                <div className="content-videosOfMovie">
                    {movieTrails?.results?.map(trail => (
                        <SwiperSlide key={trail.key} className="video-card">
                            <iframe
                                title={trail.name}
                                width="100%"
                                height="500"
                                border="none"
                                src={`https://www.youtube.com/embed/${trail.key}`}
                                allowFullScreen
                                className='videosOfMovieMp4'></iframe>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default VideoSection