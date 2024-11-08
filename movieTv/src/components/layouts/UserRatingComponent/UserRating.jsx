import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

//import css
import "./UserRating.css"

const UserRating = () => {
    const [ratingValue, setRatingValue] = useState("");
    console.log("You rate movie with", ratingValue)
    return (
        <section className="usersRating-content">
            <h3 className="usersRating-title">User Rating:</h3>
            <div className="usersVoting-content">
                <div className="usersRating">
                    <Rating
                        precision={0.5}
                        max={10}
                        value={ratingValue}
                        onChange={(event, newValue) => setRatingValue(newValue)}
                    />

                </div>
                {ratingValue && (
                    <div className="UserRate">
                        <p>{ratingValue}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default UserRating