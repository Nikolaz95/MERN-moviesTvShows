import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';

//import css
import "./DeletAccount.css";

//import img
import UserDefoult from "../../../../assets/icons/icon2-user.png"
import DeleteBtn from "../../../../assets/icons/icon-delete-account.png"

//import components
import UserLayout from '../UserLayout';
import Buttons from '../../../layouts/Buttons/Buttons';
import ModalDeleteAccount from '../../../layouts/ModalComponents/ModalDeleteAccount/ModalDeleteAccount';


const DeletAccount = () => {
    titleName('Delete Account');
    const [openModal, setOpenModal] = useState(false);

    const onClickOpenModal = () => {
        setOpenModal(true)
        document.body.style.overflow = openModal ? 'auto' : 'hidden';
    }
    return (
        <UserLayout>
            <h1>Delete Account</h1>
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
                            <div className="userProfileInfo-btnDelete">
                                <Buttons onClick={onClickOpenModal}
                                    variant="deleteAccount"
                                    icon={DeleteBtn}
                                    title="Delete Account">
                                    <p>Delete Account</p>

                                </Buttons>
                            </div>
                        </div>

                        {/* modal delete acc */}
                        {openModal && (
                            <ModalDeleteAccount openModal={openModal} setOpenModal={setOpenModal} />
                        )}
                        {/* modal delete acc */}
                    </div>

                </main>
            </section>
        </UserLayout>
    )
}

export default DeletAccount