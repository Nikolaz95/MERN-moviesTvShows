import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar, Badge } from '@mui/material'

//import css
import "./TabNavigation.css"

//import icons
import DashBoard from "../../../assets/icons/icon-dashboard.png"
import AddWatchList from "../../../assets/icons/icon-add.png"
import AddFavorit from "../../../assets/icons/icons-favorite.png"
import Rating from "../../../assets/icons/icons-star.png"
import ActorFavorit from "../../../assets/icons/icons-actor.png"
import Settings from "../../../assets/icons/icons-gear.png"

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState('');
    return (
        <section className="tabs-navigation">
            <ul className='tabsNavbar-content'>
                <li className={activeTab === 'DashBoard' ? 'active' : ''}>
                    <NavLink to="/admin/dashBoard" /* onClick={() => handleTabClick('DashBoard')} */ >
                        <span className='iconTabs'><img src={DashBoard} height={30} alt="" /></span>
                        <span className='textTabs'>DashBoard</span>
                    </NavLink>
                </li>
                <li className={activeTab === 'Settings' ? 'active' : ''}>
                    <NavLink to="/user/settings-Profile" /* onClick={() => handleTabClick('Settings')} */>
                        <span className='iconTabs'><img src={Settings} height={30} alt="" /></span>
                        <span className='textTabs'>Settings</span>
                    </NavLink>
                </li>
                <li className={activeTab === 'YourWatchList' ? 'active' : ''}>
                    <NavLink to="/user/user-WatchList" /* onClick={() => handleTabClick('YourWatchList')} */ >
                        <span className='iconTabs'><img src={AddWatchList} height={30} alt="" /></span>
                        <Badge badgeContent={0} max={9} color="success" showZero className='badgeNmr'>
                            <span className='textTabs'>Your Watch List</span>
                        </Badge>
                    </NavLink>
                </li>
                <li className={activeTab === 'YourFavoritList' ? 'active' : ''}>
                    <NavLink to="/user/user-FavoritList" /* onClick={() => handleTabClick('YourFavoritList')} */>
                        <span className='iconTabs'><img src={AddFavorit} height={30} alt="" /></span>
                        <Badge badgeContent={0} max={9} color="success" showZero>
                            <span className='textTabs'>Your Favorit List</span>
                        </Badge>
                    </NavLink>
                </li>
                <li className={activeTab === 'YourRatings' ? 'active' : ''}>
                    <NavLink to="/user/user-RatingList" /* onClick={() => handleTabClick('YourRatings')} */>
                        <span className='iconTabs'><img src={Rating} height={30} alt="" /></span>
                        <Badge badgeContent={0} max={10} color="success" showZero>
                            <span className='textTabs'>Your Ratings</span>
                        </Badge>
                    </NavLink>
                </li>
                <li className={activeTab === 'FavoritActor' ? 'active' : ''}>
                    <NavLink to="/user/user-FavoritActor" /* onClick={() => handleTabClick('FavoritActor')} */>
                        <span className='iconTabs'><img src={ActorFavorit} height={30} alt="" /></span>
                        <Badge badgeContent={0} max={10} color="success" showZero>
                            <span className='textTabs'>Favorit Actor</span>
                        </Badge>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default TabNavigation