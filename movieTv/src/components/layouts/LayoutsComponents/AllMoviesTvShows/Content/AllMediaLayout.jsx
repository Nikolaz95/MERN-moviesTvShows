import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


//import css
import "./AllMediaLayout.css";

//import images
import DefaultAdd from "../../../../../assets/icons/icon-add.png"
import AddWatchList from "../../../../../assets/icons/icon-check.png"
import DefaultFav from "../../../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../../../assets/icons/icon-like.png"

//import componet
import Buttons from '../../../Buttons/Buttons';
import Rating from '../../../RatingComponent/Rating';


const AllMediaLayout = ({ }) => {

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
            {/* <section className="mediaSection">
                        <div className="categoryTitle">
                            <h1 className="categoryTitle-name">{title}</h1>
                        </div>
                        <main className="mediaLists">
                            <div className="mediaLists-content">
                                {items.map((item) => (
                                    <div key={item.id} className={`mediaLists-card ${selectedCategory}`}>
                                        <div className="mediaLists-cardtop">
                                            <NavLink to={`/${selectedCategory}/${item.id}`}>
                                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className="mediaCards-poster" title={item.title || item.name} />
                                            </NavLink>
                                        </div>
                                        <div className="mediaLists-Cardbottom">
                                            <p className="mediaLists-name">{item.title || item.name}</p>
                                            <p className="mediaLists-rating">
                                                Rating: <Rating media={item} />
                                            </p>
                                            <div className="mediaLists-btns">
                                                <Buttons onClick={() => handleWatchList(item.id)}
                                                    variant={watchList[item.id] ? 'removeWatchList' : 'addWatchList'}
                                                >
                                                    <p>{watchList[item.id] ? 'on WatchList' : 'Add to WatchList'}</p>
                                                </Buttons>
            
                                                <Buttons onClick={() => handleFavoritList(item.id)}
                                                    variant={favorites[item.id] ? 'removeFavList' : 'addFavList'}
                                                >
                                                    <p>{favorites[item.id] ? 'on FavoriteList' : 'Add to Favorite List'}</p>
                                                </Buttons>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </section> */}
        </>
    )
}

export default AllMediaLayout