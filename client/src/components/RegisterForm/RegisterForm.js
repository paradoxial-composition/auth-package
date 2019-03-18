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
          email: '',
          password: ''
      };
      
      //this.componentDidMount = this.componentDidMount.bind(this);
      //this.login = this.login.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log('reload ....')
  }


  handleClick = (e) => {
    e.preventDefault();
    if( this.state.signup) {
      this.setState({
        redirect: false
    });
    } else {
      this.setState({
        redirect: true
    });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(`http://localhost:8081/register`,  user )
     .then(res => {
        console.log(res);
        console.log(res.data);

        this.setState({
          email: '',
          password: '',
          redirect: true
        });
       })

  };

  

    render() {

      const { getFieldDecorator } = this.props.form;

      const redirect = this.state.redirect;
      const forgot = this.state.forgot;

      if(redirect) {
        return <Redirect to="/login/login" />
    } else {
            //register Form
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
                  <a className="login-form-forgot" onClick={this.handleClick}>Cancel</a>
                  <Button type="primary" htmlType="submit" className="login-form-button"
                  
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            );
            
    }
  }
}
  
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

  export default WrappedLoginForm;