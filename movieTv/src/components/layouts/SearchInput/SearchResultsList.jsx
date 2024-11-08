import React from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./SearchResultsList.css";


/* import pictures */
import noImg from '../../../assets/pictures/noimg1.png';
import Rating from '../RatingComponent/Rating';

const SearchResultsList = ({ movies }) => {
    return (
        <>
            {movies.length > 0 ? (
                <div className="results-list">
                    <div className="search-result">
                        <ul>
                            {movies.map((movie) => (
                                <NavLink key={movie.id} to={`/movies/${movie.id}`} className="search-resultItem">
                                    <li>
                                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : noImg} width={100} height={100} alt={movie.title} title={movie.title} />
                                        <div className="search-resultContenta">
                                            <p>{movie.title}</p>
                                            <Rating movie={movie} />
                                            <p>{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
                                        </div>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="no-results">
                    <ul>
                        <li>
                            <img src={noImg} width={100} height={100} alt="" />
                            <div className="noresults-Contenta">
                                <p>No results found</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default SearchResultsList
