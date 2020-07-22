import React, { useState } from 'react'
import userLogo from '../img/user-logo.svg';
import '../css/FormLogin.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { withRouter } from 'react-router-dom';

function FormLogin(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [users] = useState([{
        username: "gigel",
        password: "123",
        usertype: "student"
    }, {
        username: "gigelx",
        password: "1234",
        usertype: "prof"
    }, {
        username: "admin1",
        password: "admin2",
        usertype: "admin"
    }]);

    const [mouseEnter, setMouseEnter] = useState(false)

    const [userFocus, setUserFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        for (let i = 0; i < users.length; i++) {
            if (`${username}` === users[i].username && `${password}` === users[i].password) {
                if (users[i].usertype === "prof") {
                    props.history.push('/prof');
                    console.log("Esti pe pagina profesor");
                }
                if (users[i].usertype === "student") {
                    props.history.push('/stud/home');

                } if (users[i].usertype === "admin") {
                    props.history.push('/admin');
                }
            } else {
                console.log("Nu este ok");
            }
        }


        setUsername('')
        setPassword('')
    }

    return (
        <div className='containerForm'>
            <div className='login-content'>
                <form
                    className={`formFocus ${mouseEnter ? 'enter' : ''} `}
                    onSubmit={handleSubmit}
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                >
                    <img src={userLogo} alt='Logo' />
                    <h2 className='title'>ExamHUB</h2>
                    <div className={`input-div one ${userFocus ? "focus" : username === '' ? '' : "focus"}`}>
                        <div className='i'>
                            <FaUserAlt />
                        </div>
                        <div className='div'>
                            <label htmlFor='username'>Username</label>

                            <input
                                type='text'
                                name='username'
                                value={username}
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={`input-div pass ${passwordFocus ? "focus" : password === '' ? '' : "focus"}`}>
                        <div className='i'>
                            <FaLock />
                        </div>
                        <div className='div'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <input type='submit' className='btn' value='Login' />
                </form>
            </div>
        </div>
    )
}
export default withRouter(FormLogin);