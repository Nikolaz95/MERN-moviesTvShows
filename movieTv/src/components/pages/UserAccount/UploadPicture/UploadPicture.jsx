import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';


//import img
import UserDefoult from "../../../../assets/icons/icon2-user.png"
import UploadCamera from "../../../../assets/icons/icons-add-camera.png"
import SavePicture from "../../../../assets/icons/icon-update.png"
import CacnelUpload from "../../../../assets/icons/icon-cancelPic.png"


//import css
import "./UploadPicture.css";

//import components
import UserLayout from '../UserLayout';
import Buttons from '../../../layouts/Buttons/Buttons';

const UploadPicture = () => {
    titleName('User Upload Picture');
    const [uploadPicture, setUploadPicture] = useState(false);
    const [cancel, setCancel] = useState(false);

    return (
        <UserLayout>
            <h1>Upload Picture</h1>

            <section className='userUpload-content'>
                <form action="" className="userUpload-info">
                    <div className="userUpload-top">
                        <img src={UserDefoult} alt="" className='userUpload-Profileimg' />
                        <input type="file" name='file' id='file' />
                        <label htmlFor="file" className='userUpload-BtnUplFile'>
                            <img src={UploadCamera} alt="" className='userUpload-camera' />
                        </label>
                    </div>
                    <div className="userUpload-Btns">
                        <Buttons
                            variant="uploadPicture">
                            <img src={SavePicture} className="iconBtns" />
                            Save Upload
                        </Buttons>
                        <Buttons
                            variant="cancelUploadImg">
                            <img src={CacnelUpload} className="iconBtns" />
                            Cancel
                        </Buttons>
                    </div>
                </form>
            </section>
        </UserLayout>
    )
}

export default UploadPicture