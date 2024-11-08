import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import titleName from '../../../../hooks/useTitle';

//import css
import "./UserRatingList.css"

//import images
import moviePicList from "../../../../assets/pictures/poster1.jpg"
import DefaultAdd from "../../../../assets/icons/icon-add.png"
import AddWatchList from "../../../../assets/icons/icon-check.png"
import DefaultFav from "../../../../assets/icons/not-favoritIcon.png"
import RemoveFromList from "../../../../assets/icons/icon-delete-account.png"

//import components
import UserLayout from '../UserLayout'
import WatchFavRatingLayout from '../../../layouts/WatchFavLayout/WatchFavLayout';
import Buttons from '../../../layouts/Buttons/Buttons';

const UserRatingList = () => {
    const [removeFromList, setRemoveFromList] = useState(false);

    const handleRemoveFromList = () => {
        setRemoveFromList(!removeFromList);
    };


    titleName('Rating List');
    return (
        <UserLayout>
            <h1>Rating List: 123</h1>
            <WatchFavRatingLayout>
                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>


                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>Rated:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersRatingContent-ratingList">
                            <h3>Your Rating:</h3>
                            <p>10</p>
                        </div>
                        <div className="usersRatingContent-btn">
                            <Buttons
                                onClick={handleRemoveFromList}
                                variant="remove">
                                <p>Remove</p>
                                <img src={RemoveFromList} alt="RemoveFromList Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>
            </WatchFavRatingLayout>
        </UserLayout>

    )
}

export default UserRatingList