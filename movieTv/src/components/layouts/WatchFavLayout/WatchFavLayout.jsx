import React from 'react'

//import css
import "./WatchFavLayout.css"

const WatchFavLayout = ({ children }) => {
    return (
        <main className='usersContentList-content'>
            {children}
        </main>
    )
}
export default WatchFavLayout