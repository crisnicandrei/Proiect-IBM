import React, { Component } from 'react'
import {Button, FormControl, FormGroup, FormLabel, Form,Container} from 'react-bootstrap';

class FormLogin extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt)
    {
        this.setState({
            
                [evt.target.name]:evt.target.value
            
            
            });
    }
    handleSubmit(evt)
    {
        evt.preventDefault();
        alert(`You typed ${this.state.username}!`)
        this.setState({
            username: ''
        })
    }
    render()
    {
        return(
            <div className='container'>
                <h1>Title goes here</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type = 'text' 
                        name = 'username'
                        value={this.state.username}
                        placeholder= 'Username'
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type = 'password'
                        name='password'
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange}/>
                    </FormGroup>
                    
                    <Button>Log In</Button>
                </Form>
            </div>
        )
    }
}

export default FormLogin