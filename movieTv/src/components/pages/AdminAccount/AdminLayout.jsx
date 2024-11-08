import React from 'react'
import adminSideBarNav from "../AdminAccount/AdminSideBarMenu"

//import css
import "./AdminLayout.css"

//import comppnents
import TabNavigation from '../../layouts/TabNavigationAccount/TabNavigation'
import SideBar from '../../layouts/SideBarNavigation/SideBar'


const AdminLayout = ({ children }) => {
    return (
        <section className="dashboard-container">
            <div className="tabs-contentProfile">
                <TabNavigation />
            </div>

            <main className="dashboard-layout">
                <SideBar menuItem={adminSideBarNav} />

                <div className="admin-DashBoardSection">
                    {children}
                </div>
            </main>
        </section>
    )
}

export default AdminLayout