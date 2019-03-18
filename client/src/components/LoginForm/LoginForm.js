import React from 'react';
import axios from 'axios';
import AuthenticationService from '../../services/AuthenticationService'
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
//import auth from './auth/auth';
import { Redirect } from "react-router-dom";

  class LoginForm extends React.Component {

    constructor() {
      super();
      this.state = {
          redirect: false,
          forgot: false,
          signup: false,
          email: '',
          password: ''
      };
      
      //this.componentDidMount = this.componentDidMount.bind(this);
      //this.login = this.login.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log('reload ....')
  }



  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(`http://localhost:8081/login`,  user )
     .then(res => {
        console.log(res);
        console.log(res.data);

        this.setState({
          email: '',
          password: '',
          redirect: true,
        });
       })

  };

  handleSignUpClick = (e) => {
    e.preventDefault();
    if( this.state.signup) {
      this.setState({
        signup: false
    });
    } else {
      this.setState({
        signup: true
    });
    }
  }
  
  handleClick = (e) => {
      e.preventDefault();
          console.log('Forgot password :/ ?');
          if( this.state.forgot) {
            this.setState({
              forgot: false
          });
          } else {
            this.setState({
              forgot: true
          });
          }
    };
  
    handleClickConfirm = (e) => {
      e.preventDefault();
          if( this.state.forgot) {
            this.setState({
              forgot: false
          });
          } else {
            this.setState({
              forgot: true
          });
          }
          const email= this.state.email;

          axios.post(`http://localhost:5000/changePassword`,  email )
         .then(res => {
           console.log(res);
           console.log(res.data);
         })

    };

    render() {

      const { getFieldDecorator } = this.props.form;

      const redirect = this.state.redirect;
      const forgot = this.state.forgot;
      const signup = this.state.signup;

      if(redirect) {
        return <Redirect to="/welcome" />
    } else {
        if (signup) {
          return <Redirect to="/login/register" />
        } else {
        if (forgot) {
            //Forgot Password Form
            return (
              <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" onChange={(event) => this.setState({email:event.target.value} )}/>
                )}
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" onClick={this.handleClick}>Cancel</a>
                <Button type="primary" htmlType="submit" className="login-form-button" 
                onClick={this.handleClickConfirm}
                >
                  Confirm
                </Button>
              </Form.Item>
            </Form>
            );
        } else {
            //Login Form
            return (
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={(event) => this.setState({email:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={(event) => this.setState({password:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )}
                  <a className="login-form-forgot" href="#" onClick={this.handleClick}>Forgot password</a>
                  <Button type="primary" htmlType="submit" className="login-form-button"
                  
                  >
                    Log in
                  </Button>
                </Form.Item>
                <Form.Item>
                  
                  <a className="login-form-forgot" href="#" onClick={this.handleSignUpClick}>Sign up</a>
                  
                </Form.Item>
              </Form>
            );
            }
          }
    }
  }
}
  
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

  export default WrappedLoginForm;