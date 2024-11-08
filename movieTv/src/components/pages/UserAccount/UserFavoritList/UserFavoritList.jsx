import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import titleName from '../../../../hooks/useTitle';

//import css
import "./UserFavoritList.css"

//import images
import moviePicList from "../../../../assets/pictures/poster1.jpg"
import DefaultAdd from "../../../../assets/icons/icon-add.png"
import AddWatchList from "../../../../assets/icons/icon-check.png"
import DefaultFav from "../../../../assets/icons/not-favoritIcon.png"
import AddFavoritList from "../../../../assets/icons/icon-like.png"

//import components
import UserLayout from '../UserLayout'
import WatchFavRatingLayout from '../../../layouts/WatchFavLayout/WatchFavLayout';
import Buttons from '../../../layouts/Buttons/Buttons';

const UserFavoritList = () => {
    const [isOnWatchList, setIsOnWatchList] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleWatchList = () => {
        setIsOnWatchList(!isOnWatchList);
    };

    const handleFavoritList = () => {
        setIsFavorite(!isFavorite);
    };
    titleName('Favorit List');
    return (
        <UserLayout>
            <h1>Favorit List: 123</h1>

            <WatchFavRatingLayout>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

                <div className="usersContentList-card">
                    <div className="usersContentList-cardTop">
                        <NavLink>
                            <img src={moviePicList} width={200} height={200} alt="" className='usersContentList-img' />
                        </NavLink>
                    </div>
                    <div className="usersContentList-cardBottom">
                        <div className="usersContentList-bottomTop">
                            <h3>Backt To the Future</h3>
                        </div>
                        <div className="usersContentList-bottomAdded">
                            <h3>Added:</h3>
                            <p>2024-10-25</p>
                        </div>
                        <div className="usersContentList-btns">
                            <Buttons
                                onClick={handleWatchList}
                                variant={isOnWatchList ? 'removeWatchList' : 'addWatchList'}>
                                <p>{isOnWatchList ? 'on WatchList' : 'Add to WatchList'}</p>
                                <img src={isOnWatchList ? AddWatchList : DefaultAdd} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>

                            <Buttons
                                onClick={handleFavoritList}
                                variant={isFavorite ? 'removeFavList' : 'addFavList'}>
                                <p>{isFavorite ? 'on FavoritList' : 'Add to Favorit List'}</p>
                                <img src={isFavorite ? AddFavoritList : DefaultFav} alt="Watchlist Icon" className="iconBtns" />
                            </Buttons>
                        </div>
                    </div>
                </div>

            </WatchFavRatingLayout>

        </UserLayout>
    )
}

export default UserFavoritList