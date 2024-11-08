import React from 'react'
import titleName from '../../../../hooks/useTitle';

//import css
import "./UpdatePassword.css";

//import components
import UserLayout from '../UserLayout';

//import img
import SaveUpdate from "../../../../assets/icons/icon-update.png"
import Buttons from '../../../layouts/Buttons/Buttons';

const UpdatePassword = () => {
    titleName('Update Password');
    return (
        <UserLayout>
            <h1>Update Password</h1>

            <div className="setting-conteinerUpdateProfile">
                <div className="setting-contentUpdateProfile">
                    <form className="form-content" action="#">
                        <label htmlFor="name_field" className="form-label">Old Password:</label>
                        <input
                            type="password"
                            id="name_field"
                            placeholder='userPassWord'
                            /* value={""} */
                            className="form-control"
                            name="name" />
                        <label htmlFor="email_field" className="form-label">New Password:</label>
                        <input
                            type="password"
                            id="email_field"
                            placeholder='userNewPassWord'
                            /* value={""} */
                            className="form-control"
                            name="email" />
                        <Buttons
                            variant="updatePassword">
                            <img src={SaveUpdate} className="iconBtns" />
                            Update Password
                        </Buttons>
                    </form>
                </div>
            </div>
        </UserLayout>
    )
}

export default UpdatePassword