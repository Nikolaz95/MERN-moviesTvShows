import React from 'react'
import Tooltip from '@mui/material/Tooltip';


//import css
import "./ToolTip.css";


const ToolTip = ({ children }) => {
    return (
        <Tooltip title="" placement="bottom">
            {children}
        </Tooltip>
    )
}

export default ToolTip