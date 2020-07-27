import React from 'react'

//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
export default function UsersLayout({ username, password, usertype, removeUsers }) {

    return (

        <div className='col-lg-4 mx-auto col-12 mb-3'>
            <div className="Userlist-card ">
                <h4>Username: {username} </h4>
                <hr />
                <h4>Password: {password}</h4>
                <hr />
                <h4>Usertype: {usertype}</h4>
                <p>
                    <FaEdit className="icons-admin-card"></FaEdit>
                    <MdDelete className="icons-admin-card" onClick={removeUsers} ></MdDelete>
                </p>
            </div>
        </div>

    );
}
