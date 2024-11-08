import React from 'react'
import titleName from '../../../../hooks/useTitle';

//import fetch data
import usersListData from '../../../data/ListOfUsersData';
//import css
import "./DashBoard.css"

//import icons
import NumMovies from "../../../../assets/icons/logo-movie.png"
import NumActors from "../../../../assets/icons/icons-actor.png"
import NumUsers from "../../../../assets/icons/icon-users.png"
import NumReviews from "../../../../assets/icons/icon-reviews.png"
import AdminLayout from '../AdminLayout';



const DashBoard = () => {
    titleName(`Admin Dashboard`)


    return (
        <AdminLayout>
            <div className="DashBoardSection-top">
                <div className="adminStatsViews">
                    <div className="adminStats-left">
                        <img src={NumMovies} width={50} height={50} alt="" />
                    </div>
                    <div className="adminStats-right">
                        <h1>Num. of Movies</h1>
                        <p>0</p>
                    </div>
                </div>

                <div className="adminStatsViews">
                    <div className="adminStats-left">
                        <img src={NumActors} width={50} height={50} alt="" />
                    </div>
                    <div className="adminStats-right">
                        <h1>Num. of Actors</h1>
                        <p>0</p>
                    </div>
                </div>

                <div className="adminStatsViews">
                    <div className="adminStats-left">
                        <img src={NumUsers} width={50} height={50} alt="" />
                    </div>
                    <div className="adminStats-right">
                        <h1>Num. of Users</h1>
                        <p>{usersListData.length}</p>
                    </div>
                </div>

                <div className="adminStatsViews">
                    <div className="adminStats-left">
                        <img src={NumReviews} width={50} height={50} alt="" />
                    </div>
                    <div className="adminStats-right">
                        <h1>Num. of Reviews</h1>
                        <p>0</p>
                    </div>
                </div>
            </div>

        </AdminLayout>
    )
}

export default DashBoard