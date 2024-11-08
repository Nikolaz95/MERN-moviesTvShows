import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
//import hook
import { useOutsideClick } from "../../../../hooks/useOutsideClick"
//import css
import "./NavBarUserLogIn.css";

//import 
import AvatarDefoult from "../../../../assets/icons/avatar-profile.jpg";
import DashBoard from "../../../../assets/icons/icon-dashboard.png"
import LogOut from "../../../../assets/icons/icon-logout2.png"

import Buttons from '../../Buttons/Buttons';

const NavBarUserLogIn = () => {
    const user = {
        name: "John Doe",
        role: "admin"
    };
    const [showDropdownUserNav, setShowDropdownUserNav] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdownUserNav(!showDropdownUserNav);
    };

    return (
        <>
            <li className="UserNavbar" onClick={handleToggleDropdown}>
                <figure>
                    <img src={AvatarDefoult} className="userIconLogIn" alt={user.name} />
                </figure>
                <p className='dropDownUsertext'>{user.name}</p>
            </li >
            {showDropdownUserNav && (
                <div className="dropDownUser">
                    <ul className="dropDownUser">
                        {user.role === 'admin' && (
                            <li className='dropDownUser-section'>
                                <NavLink to="/admin/dashBoard" className="dropDownUser-Content">
                                    <img src={DashBoard} className="dropDownUser-icon" alt="" />
                                    <p className='dropDownUsertext'>Dashbord</p>
                                </NavLink>
                            </li>
                        )}

                        <li className='dropDownUser-section'>
                            <NavLink to="/user/settings-Profile" className="dropDownUser-Content">
                                <img src={AvatarDefoult} className="dropDownUser-icon" alt="" />
                                <p className='dropDownUsertext'>Profile</p>
                            </NavLink>
                        </li>

                        <Buttons
                            variant="btn-logOut">
                            <img src={LogOut} className="dropDownUser-icon" alt="" />
                            <p className='dropDownUsertext'>Logout</p>
                        </Buttons>

                        {/* <li className='dropDownUser-section'>
                            <NavLink to="/user/settings" className="dropDownUser-Content">
                                <img src={AvatarDefoult} className="dropDownUser-icon" alt="" />
                                Logout
                            </NavLink>
                        </li> */}
                    </ul>
                </div >
            )}
        </>
    )
}

export default NavBarUserLogIn