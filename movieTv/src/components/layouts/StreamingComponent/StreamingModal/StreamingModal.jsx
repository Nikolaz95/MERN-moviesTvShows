import React from 'react'



//import css
import "./StreamingModal.css";

//import img
import CloseIcon from "../../../../assets/icons/icon-cancelPic.png"
import Missing from "../../../../assets/pictures/mising-pic.jpg"



//import components
import Buttons from '../../Buttons/Buttons'

const StreamingModal = ({ openModal, toggleOpenModal, providers, movieDetails }) => {

    return (
        <div className={`modal ${openModal ? 'modal-active' : ''}`}>
            <Buttons
                onClick={toggleOpenModal}
                variant="modalCloseX">
                <img src={CloseIcon} alt="" className="iconBtns" />
            </Buttons>
            <div className="modal-content" >
                <div className="modal-left">
                    <img src={movieDetails?.poster_path
                        ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${movieDetails.poster_path}`
                        : Missing}
                        alt="here should be a image.."
                        className='modal-PosterImg' />
                </div>
                <div className="modalright">
                    <h1 className='modalInfo-titleTeh'>Streaming providers:</h1>
                    <div className="modalright-streaming">
                        {providers.length > 0 ? (
                            providers.map((provider) => (
                                <img
                                    key={provider.provider_id}
                                    src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    title={provider.provider_name}
                                    className="streaming-logo"
                                />
                            ))
                        ) : (
                            <p>No streaming providers available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreamingModal