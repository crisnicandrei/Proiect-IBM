import React, { Component } from 'react'
import userLogo from '../img/user-logo.svg';
import '../css/style.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(evt) {
        this.setState({

            [evt.target.name]: evt.target.value


        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed ${this.state.username} and ${this.state.password}!`)
        this.setState({
            username: '',
            password: ''
        })
    }

    /* Effect for form onMouseEnter and onMouseLeave */
    mouseEnter() {
        document.getElementById("formFocus").style.boxShadow = "1px 1px 20px 1px #1b3685";
        document.getElementById("formFocus").style.transition = "all .7s";
    }
    mouseLeave() {
        document.getElementById("formFocus").style.boxShadow = "1px 1px 5px 1px #1b3685";
    }

    /* Add and remove class focus for inputUser and inputPass on events Focus and Blur */
    addClassUser() {
        const inputUser = document.querySelector(".inputUser");
        let parent = inputUser.parentNode.parentNode;
        parent.classList.add("focus");
    }
    removeClassUser() {
        const inputUser = document.querySelector(".inputUser");
        let parent = inputUser.parentNode.parentNode;
        if (inputUser.value === "") {
            parent.classList.remove("focus");
        }
    }
    addClassPass() {
        const inputPass = document.querySelector(".inputPass");
        let parent = inputPass.parentNode.parentNode;
        parent.classList.add("focus");
    }
    removeClassPass() {
        const inputPass = document.querySelector(".inputPass");
        let parent = inputPass.parentNode.parentNode;
        if (inputPass.value === "") {
            parent.classList.remove("focus");
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="login-content">
                    <form id="formFocus" className="form-design" onSubmit={this.handleSubmit} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        <img src={userLogo} alt="Logo" />
                        <h2 className="title">ExamHUB</h2>
                        <div className="input-div one">
                            <div className="i">
                                <FaUserAlt />
                            </div>
                            <div className="div">
                             
                                <label htmlFor='username'>Username</label>

                                <input
                                    onFocus={this.addClassUser}
                                    onBlur={this.removeClassUser}
                                    type='text'
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="inputUser"
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <FaLock />
                            </div>
                            <div className="div">
                              
                                <label htmlFor='password'>Password</label>
                                <input
                                    onFocus={this.addClassPass}
                                    onBlur={this.removeClassPass}
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="inputPass" />
                            </div>
                        </div>

                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}

export default FormLogin