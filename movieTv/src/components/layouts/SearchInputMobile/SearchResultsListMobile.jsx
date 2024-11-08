import React from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./SearchResultsListMobile.css";


//import img
import noImg from '../../../assets/pictures/noimg1.png';
import Rating from '../RatingComponent/Rating';
/* import RatignSearch from '../RatingComponent/RatignSearch'; */

const SearchResultsListMobile = ({ movies }) => {
    return (
        <>
            {movies.length > 0 ? (
                <div className="searchBarMobile-resultsList">
                    <div className="searchBarMobile-searchResult">
                        <ul >
                            {movies.map((movie) => (
                                <NavLink to={`/movies/${movie.id}`}>
                                    <li key={movie.id}>
                                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : noImg} className='searchBarMobile-contentImg' />
                                        {/* </NavLink> */}
                                        <div className="searchBarMobile-resultContenta">
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
                        <li >
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

export default SearchResultsListMobile