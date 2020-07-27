import React, { useContext } from 'react';
import { LoginContext } from '../LoginContext';
import UsersLayout from '../layouts/UsersLayout';

export default function UsersList() {
    const [users, setUsers] = useContext(LoginContext);

    const removeUser = username => {
        setUsers(users.filter(user => user.username !== username))
        alert(`${username} a fost sters cu succes`);
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center mt-5 mb-5">
                    <h1>Lista Utilizatorilor</h1>
                </div>
            </div>
            <div className="row">
                {users.map((user, index) =>
                    <UsersLayout username={user.username} password={user.password} usertype={user.usertype} removeUsers={() => removeUser(user.username)} key={index} />
                )}
            </div>

        </div>
    )
}
