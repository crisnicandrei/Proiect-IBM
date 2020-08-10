import React, { useState, useContext } from 'react';
//Import Context for Login
import { LoginContext } from '../LoginContext';

//Import bootstrap components
import { Form, Container } from 'react-bootstrap'

import axios from 'axios'

//Import Icons
import { FaUserAlt, FaLock, FaUsers } from 'react-icons/fa';

export default function AddUser() {
    const [users, setUsers] = useContext(LoginContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const usertypeList = ['admin', 'student', 'professor'];
    const [admin, student, prof] = usertypeList;
    const updateName = (e) => {
        setUsername(e.target.value);
    }

    const updatePass = (e) => {
        setPassword(e.target.value);
    }

    const updateUsertype = (e) => {
        setUsertype(e.target.value);
        console.log(e.target.value);
    }

    const addUser = e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            usertype: usertype
        };
        let verifyUser = users.find(user => user.username === username);
        if (verifyUser === undefined) {
            if (usertype === "") {
                alert("Trebuie selectata o optiune");
            }
            else if (username !== "" || password !== "") {

                alert(`Utilizatorul: ${username} a fost adaugat cu succes! Lungimea obiect ${users.length + 1}`)
                axios.post('http://localhost:9191/login/addUser', user)
                    .then(() => {
                        alert("Post realizat cu succes");
                        axios.get(`http://localhost:9191/login/users`).then(res => {
                            setUsers(res.data);
                        })
                    })

            } else {
                alert("Trebuie setata o parola si un nume");
            }
        } else {
            alert("Utilizatorul exista deja");
            setUsername("");
            setPassword("");
        }

        setUsername("");
        setPassword("");


    }
    console.log(users);
    return (
        <Container>
            <Form className="formDesign" onSubmit={addUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label><FaUserAlt className="form-icons" />Username</Form.Label>
                    <Form.Control type="text" name="name" value={username} onChange={updateName} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label><FaLock className="form-icons" />Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={updatePass} />
                </Form.Group>
                <Form.Group controlId="formUsertype">
                    <Form.Label><FaUsers className="form-icons" />Usertype</Form.Label>
                    <Form.Control as="select" name="usertype" defaultValue="" onChange={updateUsertype} custom >
                        <option value="" disabled>Please select an item</option>
                        <option value={admin} >Admin</option>
                        <option value={student}>Student</option>
                        <option value={prof}>Profesor</option>
                    </Form.Control>
                </Form.Group>
                <div className='buttonProf'>
                    <button className="buttonDesign" type="submit">
                        Submit
                    </button>
                </div>

            </Form>
        </Container>
    )
}