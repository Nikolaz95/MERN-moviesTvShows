import React from 'react'
import { useMoveBack } from '../../../../hooks/useMoveback';


//import css
import './BtnGoBack.css';

import { IoCaretBackCircleSharp } from "react-icons/io5";
import Buttons from '../Buttons';



const BtnGoBack = () => {
    const goBack = useMoveBack();
    return (
        <Buttons onClick={goBack}
            variant="goBack">
            <IoCaretBackCircleSharp />
            <p>Go Back</p>
        </Buttons>
    )
}

export default BtnGoBack