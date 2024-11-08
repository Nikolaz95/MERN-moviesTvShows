import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./SideBar.css"

//import icons
import LogOut from "../../../assets/icons/icon-logout2.png"
import OpenIcon from "../../../assets/icons/icon-open-button.png"
import CloseIcon from "../../../assets/icons/icon-closebutton.png"
import Buttons from '../Buttons/Buttons';



const SideBar = ({ menuItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to open/close the sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className={`aside ${isOpen ? 'open' : 'closed'}`}>

            <button className="menu-btn" onClick={toggleSidebar}>
                <img src={isOpen ? CloseIcon : OpenIcon} alt="Menu" className="menu-icon" />
            </button>

            <h1 className='dashBoardAdmin'>Admin / User:</h1>
            <p className='dashBoardName navText'>Nikola Zovko</p>

            <div className="contentSideBarNav">
                <nav className='dashBoard-NavigationContent'>
                    <ul>
                        {menuItem.map((item, index) => (
                            <li key={index} className={isOpen ? 'active' : ''}>
                                <NavLink to={item.url}>
                                    <img src={item.icon} alt="" className="sideNavBarLogo" title={item.name} />
                                    {isOpen && <span className="navText">{item.name}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Buttons
                    variant="btn-logOut">
                    <img src={LogOut} className="iconBtns" />
                    {isOpen && <p className="navText">Log Out</p>}
                </Buttons>

                {/* <button className="btn-logOut">
                    <img src={LogOut} alt="" className="btn-logOutLogo" title={"Log Out"} />
                    {isOpen && <p className="navText">Log Out</p>}
                </button> */}

            </div>

        </aside>
    )
}

export default SideBar