import React, { useState } from 'react'


//import css
import "./BtnWatchList.css";


//import img
import Default from "../../../../assets/icons/icon-add.png"
import AddWatchList from "../../../../assets/icons/icon-check.png"

const BtnWatchList = () => {
    const [addWatchList, setAddWatchList] = useState(false);
    const handleClick = () => {
        setAddWatchList(!addWatchList);
        console.log(!addWatchList);
    };


    return (
        <button
            onClick={handleClick}
            className={`watchlist ${addWatchList ? "remove" : "add"}`}>

            <p>{addWatchList ? 'on WathcList' : 'Add to wathcList'}</p>
            <img src={addWatchList ? AddWatchList : Default} alt="Watchlist Icon" />
        </button>
    )
}

export default BtnWatchList