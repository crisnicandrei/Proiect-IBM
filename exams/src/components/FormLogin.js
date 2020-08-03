import React, { useState, useContext } from 'react'
//Import imgs
import userLogo from '../img/user-logo.svg';

//Import Icons
import { FaUserAlt, FaLock } from 'react-icons/fa';

//Import router-dom
import { withRouter } from 'react-router-dom';

//Import CSS
import '../css/FormLogin.css';
//Import LoginContext
import { LoginContext } from './LoginContext';
import * as ROUTES from './Constants/routes'


function FormLogin(props) {
    const { history } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [users] = useContext(LoginContext);
    const [mouseEnter, setMouseEnter] = useState(false)

    const [userFocus, setUserFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        let verify;
        for (let i = 0; i < users.length; i++) {
            if (`${username}` === users[i].username && `${password}` === users[i].password) {
                if (users[i].usertype === "professor") {
                    verify = true;
                    history.push(ROUTES.PROFHOME);
                    break;
                } else if (users[i].usertype === "student") {
                    verify = true;
                    history.push(ROUTES.STUDENTHOME);
                    break;
                } else if (users[i].usertype === "admin") {
                    verify = true;
                    history.push(ROUTES.ADMINHOME);
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
                    <h2 className='titleLogin'>ExamHUB</h2>
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