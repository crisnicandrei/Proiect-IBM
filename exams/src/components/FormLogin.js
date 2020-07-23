import React, { useState } from 'react'
//Import imgs
import userLogo from '../img/user-logo.svg';

//Import Icons
import { FaUserAlt, FaLock } from 'react-icons/fa';

//Import router-dom
import { withRouter } from 'react-router-dom';

//Import CSS
import '../css/FormLogin.css';

function FormLogin(props) {
    const { history } = props;
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
    }, {
        username: "admin7",
        password: "123",
        usertype: "admin"
    }, {
        username: "student",
        password: "123",
        usertype: "student"
    }, {
        username: "profesor",
        password: "123",
        usertype: "prof"
    }]);

    const [mouseEnter, setMouseEnter] = useState(false)

    const [userFocus, setUserFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        let verify;
        for (let i = 0; i < users.length; i++) {
            if (`${username}` === users[i].username && `${password}` === users[i].password) {
                if (users[i].usertype === "prof") {
                    verify = true;
                    history.push('/prof/home');
                    break;
                } else if (users[i].usertype === "student") {
                    verify = true;
                    history.push('/stud/home');
                    break;
                } else if (users[i].usertype === "admin") {
                    verify = true;
                    history.push('/admin/home');
                    break;
                }
            } else {
                verify = false;
            }
        }
        if (verify === false) {
            alert("Este gresit");
        } else {
            console.log("Connectat cu succes");
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