import React, { Component } from 'react'
import userLogo from '../user-logo.svg';
import '../css/style.css';

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
        alert(`You typed ${this.state.username}!`)
        this.setState({
            username: ''
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="login-content">
                    <form id="formFocus" className="form-design" onSubmit={this.handleSubmit}>
                        <img src={userLogo} alt="Logo" />
                        <h2 className="title">Title goes here</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope">x</i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>

                                <input
                                    type='text'
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    className="input"
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock">x</i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="input" />
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