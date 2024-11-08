import React, { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from "../../../hooks/useOutsideClick"
import useFetch from '../../../hooks/useFetch';


//import css
import "./Search.css";
//import img
import SearchImg from "../../../assets/icons/icon-search.png";


//import components
import SearchResultsList from './SearchResultsList';

//import hook

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    /* onclick Focus  */
    const inputFocus = useRef(null);
    const handleInputFocus = () => {
        inputFocus.current.focus();
    };
    // Handler to close search results
    const closeSearchResults = () => {
        setIsSearchActive(false);
        setSearchValue(''); // Clear the input field when clicking outside
        setSearchResults([]); // Clear search results
    };

    // Use the custom hook to close search results when clicking outside
    const clicOutside = useOutsideClick(closeSearchResults);


    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

    /* fetch */
    const { data: movies, loading, error } = useFetch(apiUrlMovie);


    return (
        <div className="searchBar-container" ref={clicOutside}>
            <div className="searchbar-wrapper" >
                <div className="searchbar-content" >
                    <form className='serch-form'>
                        <input className='search-input'
                            type="text"
                            value={searchValue}
                            onFocus={() => setIsSearchActive(true)}
                            onChange={(e) => setSearchValue(e.target.value)}
                            ref={inputFocus}
                            placeholder='Search for the Movies, TvShow, Actors...'
                        />
                        <img onClick={handleInputFocus}
                            src={SearchImg}
                            alt=""
                            id="search-icon" />
                    </form>
                </div>

                {isSearchActive && searchValue && (
                    <SearchResultsList movies={movies?.results || []} />
                )}
            </div>
        </div>
    )
}

export default Search