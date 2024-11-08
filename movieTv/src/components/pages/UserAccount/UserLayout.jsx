import React from 'react'

import userSideBarNav from "./UserSideBarMenu"



import TabNavigation from '../../layouts/TabNavigationAccount/TabNavigation'
import SideBar from '../../layouts/SideBarNavigation/SideBar'

const UserLayout = ({ children }) => {
    return (
        <section className="dashboard-container">
            <div className="tabs-contentProfile">
                <TabNavigation />
            </div>

            <main className="dashboard-layout">
                <SideBar menuItem={userSideBarNav} />

                <div className="admin-DashBoardSection">
                    {children}
                </div>
            </main>
        </section>
    )
}

export default UserLayout