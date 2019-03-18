import React from 'react';

import './Login.css';
import LoginForm from '../LoginForm';
import { Card } from 'antd';
import RouterView from './router';
import { BrowserRouter } from 'react-router-dom';

const Login = props => (
    <div className="centered">
        <BrowserRouter>
        <Card style={{ width: 300 }}>
            <RouterView></RouterView>
        </Card>
        </BrowserRouter>
    </div>
);
  
  export default Login;