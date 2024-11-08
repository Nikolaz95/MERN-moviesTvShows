import React, { useEffect, useState } from 'react'

import dropDownTvShows from "../../layouts/DropDownCategory/DropDownCategoryList/DropDownTvShowsList"



//import components
import DropDownCategory from '../../layouts/DropDownCategory/DropDownCategory'
import { useLocation } from 'react-router-dom'
import TitleName from '../../../hooks/TitleName/TitleName'

const AllTvShows = () => {
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const getTitleBasedOnCategory = (category) => {
        switch (category) {
            case 'onTheAirTv':
                return 'On The Air Tv Shows';
            case 'popularTv':
                return 'Popular Tv Shows';
            case 'topratedTv':
                return 'Top Rated TvShows';
            default:
                return '';
        }
    };
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'onTheAirTv');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setShowDropdown(false);
    };

    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);
    const [tvShow, setTvShow] = useState([]);

    const handleOpenDropDown = () => {
        setShowDropdown(!showDropdown)
    }

    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';
                if (selectedCategory === 'onTheAirTv') {
                    link = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;

                } else if (selectedCategory === 'popularTv') {
                    link = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

                } else if (selectedCategory === 'topratedTv') {
                    link = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setTvShow(jsonData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDataRequest();
    }, [selectedCategory]);


    return (
        <>
            <TitleName title={getTitleBasedOnCategory(selectedCategory)} />
            <section className='allMovieSection'>
                <div className="categoryTitle">
                    <h1 className="categoryTitle-name">
                        {getTitleBasedOnCategory(selectedCategory)}
                    </h1>

                    <DropDownCategory
                        categories={dropDownTvShows}
                        showDropdown={showDropdown}
                        handleOpenDropDown={handleOpenDropDown}
                        handleCategoryChange={handleCategoryChange} />

                </div>
            </section>
        </>
    )
}

export default AllTvShows