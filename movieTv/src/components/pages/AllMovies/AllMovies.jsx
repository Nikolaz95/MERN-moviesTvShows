import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import dropDownMovies from "../../layouts/DropDownCategory/DropDownCategoryList/DropDownMoviesList"


//import css
import "./AllMovies.css";

//import images
import DefaultAdd from "../../../assets/icons/icon-add.png"
import AddWatchList from "../../../assets/icons/icon-check.png"
import DefaultFav from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../assets/icons/icon-like.png"

//import components
import DropDownCategory from '../../layouts/DropDownCategory/DropDownCategory';
import Rating from '../../layouts/RatingComponent/Rating';
import TitleName from '../../../hooks/TitleName/TitleName';
import Buttons from '../../layouts/Buttons/Buttons';
import AllMediaLayout from '../../layouts/LayoutsComponents/AllMoviesTvShows/Content/AllMediaLayout';

const AllMovies = () => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const getTitleBasedOnCategory = (category) => {
        switch (category) {
            case 'theaters':
                return 'Now playing in Theatres';
            case 'upcoming':
                return 'Upcoming movies';
            case 'toprated':
                return 'Top Rated Movies';
            default:
                return '';
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'theaters');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setShowDropdown(false);
    };

    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';

                if (selectedCategory === 'theaters') {
                    link = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
                } else if (selectedCategory === 'upcoming') {
                    link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
                } else if (selectedCategory === 'toprated') {
                    link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setMovies(jsonData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDataRequest();
    }, [selectedCategory]);

    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOpenDropDown = () => {
        setShowDropdown(!showDropdown)
    }

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
        <>
            <TitleName title={getTitleBasedOnCategory(selectedCategory)} />
            <section className='allMovieSection'>
                <div className="categoryTitle">
                    <h1 className="categoryTitle-name">
                        {getTitleBasedOnCategory(selectedCategory)} :
                    </h1>

                    <DropDownCategory
                        categories={dropDownMovies}
                        showDropdown={showDropdown}
                        handleOpenDropDown={handleOpenDropDown}
                        handleCategoryChange={handleCategoryChange} />

                </div>

                <main className='allMovieLists'>
                    <div className="allMovieLists-content">
                        {movies.map((movie) => (
                            <div key={movie.id} className={`allMovieLists-card ${selectedCategory}`}>
                                <div className="allMovieLists-cardtop">
                                    <NavLink to={`/movies/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="allmoviesCards-poster" title={movie.title} />
                                    </NavLink>
                                </div>
                                <div className="allMovieLists-Cardbottom">
                                    <p className="allMovieListsl-name">{movie.title}</p>
                                    <p className="allMovieLists-rating">
                                        Rating: <Rating movie={movie} />
                                    </p>
                                    <div className="allMovieLists-btns">
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
                        ))}
                    </div>
                </main>

                {/* <AllMediaLayout items={movies}
                    selectedCategory={selectedCategory}/> */}

            </section>
        </>
    )
}

export default AllMovies