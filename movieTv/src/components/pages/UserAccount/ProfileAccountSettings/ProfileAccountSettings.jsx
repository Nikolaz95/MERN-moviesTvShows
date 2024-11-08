import React from 'react'
import titleName from '../../../../hooks/useTitle';



//import img
import UserDefoult from "../../../../assets/icons/icon2-user.png"
//import css
import "./ProfileAccountSettings.css"


//import components
import UserLayout from '../UserLayout'
import Buttons from '../../../layouts/Buttons/Buttons';



const ProfileAccountSettings = () => {
    titleName('Profile Info');
    return (
        <UserLayout>
            <h1>Profile Info</h1>
            <section className='userProfileInfo-content'>
                <main className="userProfileInfo-info">
                    <div className="userProfileInfo-container">
                        <div className="userProfileInfo-top">
                            <img src={UserDefoult} alt="" title="Your Profil picture" className='userProfileInfo-img' />
                        </div>
                        <div className="userProfileInfo-bottom">
                            <div className="userProfileInfo-nameContent">
                                <h1>Full Name:</h1>
                                <p>Nikola Zovko</p>
                            </div>
                            <div className="userProfileInfo-emailContent">
                                <h1>Email:</h1>
                                <p>n@gmail.com</p>
                            </div>
                            <div className="userProfileInfo-joinedContent">
                                <h1>Joined On:</h1>
                                <p>2024-10-24</p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </UserLayout>
    )
}

export default ProfileAccountSettings