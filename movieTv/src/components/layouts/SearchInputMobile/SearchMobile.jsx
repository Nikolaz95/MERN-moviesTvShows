import React, { useEffect, useState } from 'react'
import { useOutsideClick } from "../../../hooks/useOutsideClick"

//import css
import "./SearchMobile.css";

//import img
import SearchImg from "../../../assets/icons/icon-search.png";
import CloseSearch from "../../../assets/icons/icon-cancelPic.png";
import SearchResultsListMobile from './SearchResultsListMobile';
import useFetch from '../../../hooks/useFetch';


const SearchMobile = ({ handleMobileSearchToggle }) => {

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const onClickShowInput = () => {
        setShowInput((prevShowInput) => !prevShowInput);
        if (showInput) {
            setIsSearchActive(false);
            setSearchValue('');
            handleMobileSearchToggle(false); // Notify parent to show logo
        } else {
            handleMobileSearchToggle(true); // Notify parent to hide logo
        }
    };


    /* onclick close outside content */

    // Handler to close search results
    const closeSearchResults = () => {
        if (showInput) {
            setShowInput(false);   // Hide input field
            setIsSearchActive(false); // Hide search results
            setSearchValue(''); // Clear the search value
            handleMobileSearchToggle(false); // Notify parent to show logo again
        }
    };

    // Use the custom hook to close search results when clicking outside
    const clicOutside = useOutsideClick(closeSearchResults);

    /* fetch */
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

    /* fetch */
    const { data: movies, loading, error } = useFetch(apiUrlMovie);


    return (
        <div className="searchBarMobile-container" ref={clicOutside}>
            <div className="searchBarMobile-wrapper" >
                <div className="searchBarMobile-content">
                    <form className="searchBarMobile-form">
                        {showInput && (
                            <input
                                className='searchBarMobile-input'
                                type="text"
                                placeholder='Search for the Movies, TvShow, Actors...'
                                value={searchValue}
                                onFocus={() => setIsSearchActive(true)}
                                onChange={(e) => setSearchValue(e.target.value)} />
                        )}
                    </form>
                    <img
                        src={showInput ? CloseSearch : SearchImg}
                        onClick={onClickShowInput}
                        alt=""
                        className="searchBarMobile-icon"
                    />
                </div>
                {isSearchActive && searchValue && (
                    <SearchResultsListMobile movies={movies?.results || []} />
                )}
            </div>
        </div>
    )
}

export default SearchMobile