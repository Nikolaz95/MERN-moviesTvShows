import React from 'react'
import titleName from '../../../../hooks/useTitle';


//import css
import "./ProfileUpdate.css";

import UserLayout from '../UserLayout';
import Buttons from '../../../layouts/Buttons/Buttons';

//import img
import SaveUpdate from "../../../../assets/icons/icon-update.png"

const ProfileUpdate = () => {
    titleName('Profile Update');
    return (
        <UserLayout>
            <h1>Profile Update</h1>

            <div className="setting-conteinerUpdateProfile">
                <div className="setting-contentUpdateProfile">
                    <form className="form-content" action="#">
                        <label htmlFor="name_field" className="form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            placeholder='fakeUserName'
                            value={""}
                            name="name" />
                        <label htmlFor="email_field" className="form-label">Email:</label>
                        <input
                            type="email"
                            placeholder='fake@email.com'
                            value={""}
                            id="email_field"
                            className="form-control"
                            name="email" />
                        <div className="btn-updateProfileSeting">
                            <Buttons
                                variant="updateProfile">
                                <img src={SaveUpdate} className="iconBtns" />
                                Save Upload
                            </Buttons>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    )
}

export default ProfileUpdate