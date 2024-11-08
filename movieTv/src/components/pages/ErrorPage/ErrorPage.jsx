import React from 'react'
import titleName from '../../../hooks/useTitle';
import BtnGoBack from '../../layouts/Buttons/BtnGoBack/BtnGoBack';

//import css
import "./ErrorPage.css";

/* import img */
import Eror from "../../../assets/icons/icon-error.png"


const ErrorPage = () => {
    titleName('Error Page 404');
    return (
        <div className="eror-content">
            <div className="erorTopContent">
                <BtnGoBack />
            </div>
            <div className="main-content">
                <img src={Eror} alt="" className='img-eror' />
                <p className='text-eror vibrate-1'>This page not exist</p>
                <img src={Eror} alt="" className='img-eror' />
            </div>
        </div>
    )
}

export default ErrorPage
