import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./NavBar.css";

//icon import 
import Movies from "../../../assets/icons/icon-movies.png";
import TvShows from "../../../assets/icons/icon-tvs.png";
import SingIn from "../../../assets/icons/icon-login.png";
import NavBarUserLogIn from './NavBarUserLogIn/NavBarUserLogIn';


const NavBar = ({ isSideMenuOpen, toggleSideMenu }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isSideMenuOpen]);

    return (
        <>
            <div className={`navBar-Content ${isSideMenuOpen ? "active" : "close"}`}>
                <ul>
                    <li>
                        <NavLink to="/allMovies" className='navigation-style'>
                            <p>Movies</p>
                            <img src={Movies} alt="" className="icon-navigation" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/allTvShows" className='navigation-style disabled-link'  >
                            <p>TV Shows</p>
                            <img src={TvShows} alt="" className="icon-navigation" />
                        </NavLink>
                    </li>

                    {isLoggedIn ? (
                        <NavBarUserLogIn isLoggedIn={isLoggedIn} />
                    ) : (
                        <li>
                            <NavLink to="/singIn" className='navigation-style'>
                                <p> Sing in</p>
                                <img src={SingIn} alt="" className="icon-navigation" />
                            </NavLink>
                        </li>
                    )}

                </ul>
            </div>
        </>

    )
}

export default NavBar