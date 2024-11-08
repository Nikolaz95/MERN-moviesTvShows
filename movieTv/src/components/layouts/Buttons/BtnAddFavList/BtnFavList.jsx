import React, { useState } from 'react'

//import css
import "./BtnFavList.css";
//import img
import Default from "../../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../../assets/icons/icon-like.png"

const BtnFavList = () => {
    const [favList, setFavList] = useState(false);

    const handleClick = () => {
        setFavList(!favList);
        console.log(!favList);
    };
    return (
        <button onClick={handleClick} className={`favlist ${favList ? "remove" : "add"}`}>
            <p>{favList ? 'Your Favorite' : 'Add to Favorites'}</p>
            <img src={favList ? AddFavoritList : Default} alt="fav Icon" className='icon-add' />
        </button>
    )
}

export default BtnFavList