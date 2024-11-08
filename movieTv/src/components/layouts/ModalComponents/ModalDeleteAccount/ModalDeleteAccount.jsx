import React from 'react'

//import css
import "./ModalDeleteAccount.css";

//import img
import Cancel from "../../../../assets/icons/icon-cancelPic.png"
import ConfirmDelete from "../../../../assets/icons/icon-check.png"

//import components
import Buttons from '../../Buttons/Buttons';

const ModalDeleteAccount = ({ openModal, setOpenModal }) => {

    const onClickCloseModal = () => {
        setOpenModal(false)
    }

    const onClickConfirmDeleteAccoutn = () => {

    }
    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <div className="modalContainer">
                    <h1>Do you realy wanna delete your account</h1>
                    <div className="deleteConfirmBtns">
                        <Buttons
                            onClick={onClickConfirmDeleteAccoutn}
                            variant="confirmDltAcc"
                            icon={ConfirmDelete}>
                            <p>Yes</p>
                        </Buttons>

                        <Buttons
                            onClick={onClickCloseModal}
                            variant="confirmDltAcc"
                            icon={Cancel}>
                            <p>Cancel</p>
                        </Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteAccount