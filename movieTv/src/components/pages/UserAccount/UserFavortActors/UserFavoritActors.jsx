import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';
import { NavLink } from 'react-router-dom';


//import images
import actorPicList from "../../../../assets/pictures/Tom-Cruise.jpg"
import RemoveFromList from "../../../../assets/icons/icon-delete-account.png"

//import css
import "./UserFavoritActors.css"

//import components
import UserLayout from '../UserLayout'
import WatchFavRatingLayout from '../../../layouts/WatchFavLayout/WatchFavLayout';
import Buttons from '../../../layouts/Buttons/Buttons';




const UserFavoritActors = () => {
    titleName('Favorit Actors List');
    const [removeFromList, setRemoveFromList] = useState(false);

    const handleRemoveFromList = () => {
        setRemoveFromList(!removeFromList);
    };
    return (
        <UserLayout>
            <h1>Favorit Actors List: 123</h1>
            <WatchFavRatingLayout>
                <div className="usersRatingContent-card">
                    <div className="usersRatingContent-cardTop">
                        <NavLink>
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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
                            <img src={actorPicList} width={200} height={200} alt="" className='usersRating-img' />
                        </NavLink>
                    </div>
                    <div className="usersRatingContentList-cardBottom">
                        <div className="usersRatingContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>

                        <div className="usersRatingContentList-bottomAdded">
                            <h3>added:</h3>
                            <p>2024-10-25</p>
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

export default UserFavoritActors