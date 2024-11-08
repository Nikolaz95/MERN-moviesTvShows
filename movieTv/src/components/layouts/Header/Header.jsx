import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



//import css
import "./Header.css";

//impoort components
import Search from '../SearchInput/Search';
import Logo from '../Logo/Logo';
import NavBar from '../NavigationBar/NavBar';
import HamMenu from '../HamburgerMenu/HamMenu';
import SearchMobile from '../SearchInputMobile/SearchMobile';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);

    const toggleSideMenu = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }

    const handleMobileSearchToggle = (isActive) => {
        setIsVisible(!isActive);
    };


    return (
        <header>
            <div className="content-header">
                {isVisible && (
                    <Logo />
                )}
                <>
                    <Search />
                </>

                <>
                    <SearchMobile handleMobileSearchToggle={handleMobileSearchToggle} />
                </>
                {/* navbar */}
                <NavBar isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
                {/* navbar */}

                {/* hamburger */}
                {isVisible && (
                    <HamMenu toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
                )}
                {/* hamburger */}

            </div>
        </header>
    )
}

export default Header