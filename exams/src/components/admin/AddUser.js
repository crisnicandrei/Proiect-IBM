import React, { useState, useContext } from 'react';
//Import Context for Login
import { LoginContext } from '../LoginContext';

//Import bootstrap components
import { Form, Button, Container } from 'react-bootstrap'


export default function AddUser() {
    const [users, setUsers] = useContext(LoginContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');
    const usertypeList = ['admin', 'student', 'prof'];
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
        let verifyUser = users.find(user => user.username === username);
        if (verifyUser === undefined) {
            if (usertype === "") {
                alert("Trebuie selectata o optiune");
            }
            else if (username !== "" || password !== "") {

                alert(`Utilizatorul: ${username} a fost adaugat cu succes! Lungimea obiect ${users.length + 1}`)
                setUsers(prevUser => [...prevUser, { username: username, password: password, usertype: usertype }])
                setUsername("");
                setPassword("");


            } else {
                alert("Trebuie setata o parola si un nume");
            }
        } else {
            alert("Utilizatorul exista deja");
            setUsername("");
            setPassword("");
        }


    }
    console.log(users);
    return (
        <Container>
            <Form onSubmit={addUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="name" value={username} onChange={updateName} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={updatePass} />
                </Form.Group>
                <Form.Group controlId="formUsertype">
                    <Form.Label>Usertype</Form.Label>
                    <Form.Control as="select" name="usertype" defaultValue="" onChange={updateUsertype} custom >
                        <option value="" disabled>Please select an item</option>
                        <option value={admin} >Admin</option>
                        <option value={student}>Student</option>
                        <option value={prof}>Profesor</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit">Submit</Button>

            </Form>
        </Container>
    )
}