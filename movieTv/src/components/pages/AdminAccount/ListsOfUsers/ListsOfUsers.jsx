import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';


//import fetch data
import usersListData from '../../../data/ListOfUsersData';

//import css
import "./ListsOfUsers.css"

//import components
import TabNavigation from '../../../layouts/TabNavigationAccount/TabNavigation'
import SideBar from '../../../layouts/SideBarNavigation/SideBar'
import PaginationComponent from '../../../layouts/Pagination/PaginationComponent';
import TableList from './TableList';
import AdminLayout from '../AdminLayout';

const ListsOfUsers = () => {
    titleName(`List of Users`)
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 9;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersListData.slice(indexOfFirstUser, indexOfLastUser);

    // Calculate the total number of pages
    const totalPages = Math.ceil(usersListData.length / usersPerPage);

    // Handle page change
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <AdminLayout>
            <h1>List of Users: {usersListData.length} </h1>

            <TableList currentUsers={currentUsers} />

            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                handleChange={handleChange} />
        </AdminLayout>
    )
}

export default ListsOfUsers