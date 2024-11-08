import React from 'react'

//import css
import "./TableList.css"

//import icon
import UpdateAcc from "../../../../assets/icons/icon-update.png"
import DeleteAcc from "../../../../assets/icons/icon-delete-account.png"

const TableList = ({ currentUsers }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {currentUsers.map((user) => (
                    <tr key={user.id}>
                        <td>#{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.date}</td>
                        <td>{user.role}</td>
                        <td>
                            <div className='btn-userListContent'>
                                <button className='btn-userList'>
                                    <img src={UpdateAcc} alt="" className='btnIcon-userList' title='update' />
                                </button>
                                <button className='btn-userList'>
                                    <img src={DeleteAcc} alt="" className='btnIcon-userList' title='delete' />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default TableList