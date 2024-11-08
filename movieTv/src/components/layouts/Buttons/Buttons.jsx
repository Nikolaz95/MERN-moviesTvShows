import React from 'react'


//import css
import './Buttons.css';

const Buttons = ({ onClick, children, variant, icon }) => {

    return (
        <button onClick={onClick} className={`button ${variant}`}>
            {icon && <img src={icon} className="iconBtns" />}
            {children}
        </button>
    )
}

export default Buttons