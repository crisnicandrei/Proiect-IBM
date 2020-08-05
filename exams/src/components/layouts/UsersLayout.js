import React from 'react'
import {useState,useContext} from 'react'
//Import Icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { LoginContext } from '../LoginContext';
import { Form } from 'react-bootstrap'
import { AiFillCalendar } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';
import { FaSchool } from 'react-icons/fa';

import axios from 'axios';
export default function UsersLayout({ username, password, usertype, removeUsers,userId }) {

    const [users,setUser] = useContext(LoginContext)
    const [isEditing, setEditing] = useState(false);
    const [Username,setUsername] = useState(username);
    const [Password,setPassword] = useState(password);
    const [Usertype,setUsertype] = useState(usertype)

    function handleEdit()
    {
        setEditing(!isEditing)
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        const userUpdate = {
            username:Username,
            password:Password,
            usertype:Usertype
        } 
        axios.put(`http://localhost:9191/updateUser/${userId}`, userUpdate)
      .then(
        axios.get('http://localhost:9191/login/users').then(res => {
          setUser(res.data);
          console.log(res.data);
        })
      )
        setEditing(false);  
    }

    let display;
    if(isEditing)
    {
        display = (
            <div className="col-md-4 col-sm-12">
        <div className="StudentCard">
          <Form onSubmit={handleSubmit}>


            <Form.Group controlId="formBasicUsername">
              <Form.Label><AiFillCalendar className="form-icons" />Username</Form.Label>
              <Form.Control type="text" name='Username' value={Username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><GoCalendar className="form-icons" />Password</Form.Label>
              <Form.Control type="text" name='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicUsertype">
              <Form.Label><FaSchool className="form-icons" />Usertype</Form.Label>
              <Form.Control type="text" name='Usertype' value={Usertype} onChange={(e) => setUsertype(e.target.value)} />
            </Form.Group>


            

            <div className='buttonProf'>
              <button className="buttonDesign" type="submit">
                Submit
            </button>&nbsp;
            <button className="buttonDesign" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </Form>
        </div>
      </div>
        )
    }
    else
    {
        display = (<div className='col-lg-4 mx-auto col-12 mb-3'>
        <div className="Userlist-card ">
            <h4>Username: {username} </h4>
            <hr />
            <h4>Password: {password}</h4>
            <hr />
            <h4>Usertype: {usertype}</h4>
            <p>
                <FaEdit className="icons-admin-card" onClick={handleEdit}></FaEdit>
                <MdDelete className="icons-admin-card" onClick={removeUsers} ></MdDelete>
            </p>
        </div>
    </div>)
    }

    
    return (

        display

    );
}
