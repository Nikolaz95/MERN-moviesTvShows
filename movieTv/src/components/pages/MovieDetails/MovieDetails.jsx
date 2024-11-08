import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';



//import css
import "./MovieDetails.css";


//import components
import GenresType from '../../layouts/GenresComponents/GenresType';
import ReleaseDetails from '../../layouts/ReleaseDetailsComponents/ReleaseDetails';
import RunTime from '../../layouts/RunTimeComponent/RunTime';
import Rating from '../../layouts/RatingComponent/Rating';
import UserRating from '../../layouts/UserRatingComponent/UserRating';
import MovieTagLine from '../../layouts/MovieTagLine/MovieTagLine';
import MovieOverview from '../../layouts/MovieOverview/MovieOverview';
import ReviewsSection from './MovieReview/ReviewsSection';
import VideoSection from './MovieVideo/VideoSection';
import PicturesSection from './MoviePictures/PicturesSection';
import RecommendationsSection from './MovieRecommendations/RecommendationsSection';
import Buttons from '../../layouts/Buttons/Buttons';
import ActorsSection from './MovieActors/ActorsSection';
import TitleName from '../../../hooks/TitleName/TitleName';



//import images
import StreamingImg from "../../../assets/icons/icon-streaming.png"
import DefaultAdd from "../../../assets/icons/icon-add.png"
import AddWatchList from "../../../assets/icons/icon-check.png"
import DefaultFav from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../assets/icons/icon-like.png"
import Missing from "../../../assets/pictures/mising-pic.jpg"
import StreamingModal from '../../layouts/StreamingComponent/StreamingModal/StreamingModal';




const MovieDetails = () => {
    const params = useParams();
    const [isOnWatchList, setIsOnWatchList] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    //za modal 
    const [openModal, setOpenModal] = useState(false);
    const [projects, setProjects] = useState([]);

    /* open /close modal function */
    const toggleOpenModal = () => {
        setOpenModal(!openModal);
        document.body.style.overflow = openModal ? 'auto' : 'hidden';
    };



    const handleWatchList = () => {
        setIsOnWatchList(!isOnWatchList);
    }

    const handleFavoritList = () => {
        setIsFavorite(!isFavorite);
    }
    // Fetch data
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiMovieDetails = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`;

    const apiMovieStreams = `https://api.themoviedb.org/3/movie/${params.id}/watch/providers?api_key=${apiKey}`;

    // Fetch data
    // Fetch movie details and streaming providers separately
    const { data: movieDetails, loading: loadingDetails, error: errorDetails } = useFetch(apiMovieDetails);
    const { data: streamingData, loading: loadingStreams, error: errorStreams } = useFetch(apiMovieStreams);


    // Extract 'flatrate' providers (adjust region code if needed)
    const flatrateProviders = streamingData?.results?.SE?.flatrate || [];

    return (
        <>
            <TitleName title={movieDetails?.original_title} />
            <section className="MovieDetails-section">
                <div className="MovieDetails-topContent">
                    <div className="MovieDetails-BgPoster">
                        <img
                            src={movieDetails?.backdrop_path
                                ? `https://www.themoviedb.org/t/p/original/${movieDetails.backdrop_path}`
                                : Missing}
                            alt=""
                            className="MovieDetails-BgPosterImg"
                        />
                    </div>
                </div>

                <div className="MovieDetails-PosterContent">
                    <div className="MovieDetails-left">
                        <img
                            src={movieDetails?.poster_path
                                ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${movieDetails.poster_path}`
                                : Missing}
                            className="MovieDetails-PosterImg"
                            alt="Poster"
                            title={movieDetails?.original_title} />

                        <div className="streamingContent">
                            <Buttons variant="streaming" onClick={toggleOpenModal}>
                                <p>Now Streaming on</p>
                                <img src={StreamingImg} alt="Streaming Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>

                    {/* modal */}
                    {openModal && (
                        <StreamingModal
                            toggleOpenModal={toggleOpenModal}
                            openModal={openModal}
                            providers={flatrateProviders}
                            movieDetails={movieDetails} />
                    )}

                    <div className="MovieDetails-right">
                        <div className="MovieDetails-rightTop">
                            <h1 className="MovieDetails-rightTitle">{movieDetails?.original_title}</h1>
                        </div>
                        <div className="MovieDetails-rightMiddle">
                            <MovieOverview movieDetails={movieDetails} />
                            <MovieTagLine movieDetails={movieDetails} />
                        </div>
                        <div className="MovieDetails-fact">
                            {/* genres */}
                            <GenresType movieDetails={movieDetails} />
                            {/* genres */}

                            {/* releaseDetails */}
                            <ReleaseDetails movieDetails={movieDetails} />
                            {/* releaseDetails */}

                            <div className="TimeRating-section">
                                {/* runTime */}
                                <RunTime movieDetails={movieDetails} />
                                {/* runTime */}

                                {/* avg rating */}
                                <Rating movie={movieDetails} />
                                {/* avg rating */}
                            </div>
                            {/* user Rating */}
                            <UserRating />
                            {/* user Rating */}
                        </div>
                        <div className="MovieDetails-btnContent">

                            <Buttons onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}
                                icon={isOnWatchList ? AddWatchList : DefaultAdd}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                            </Buttons>
                            <Buttons onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}
                                icon={isFavorite ? AddFavoritList : DefaultFav}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                            </Buttons>
                        </div>
                    </div>
                </div>
                <main className='MovieDetails-otherInfo'>

                    <ActorsSection params={params} />

                    {/* <VideoSection params={params} /> */}

                    <PicturesSection params={params} />

                    <ReviewsSection />

                    <RecommendationsSection params={params} />
                </main>
            </section>
        </>
    )
}

export default MovieDetails